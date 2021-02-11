var CACHE_STATIC_NAME = "static-v4";
var CACHE_DYNAMIC_NAME = "dynamic-v4";
const urlsToChache = [
  "/",
  "./index.html",
  "./static/css/2.7740ab65.chunk.css",
  "./static/css/2.7740ab65.chunk.css.map",
  "./static/css/main.89f61664.chunk.css",
  "./static/css/main.89f61664.chunk.css.map",
  "./static/js/2.abbcf303.chunk.js",
  "./static/js/2.abbcf303.chunk.js.map",
  "./static/js/main.dccf9eca.chunk.js",
  "./static/js/main.dccf9eca.chunk.js.map",
  "./static/js/runtime-main.df859bee.js",
  "./static/js/runtime-main.df859bee.js.map",
];
const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      return cache.addAll(urlsToChache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== CACHE_STATIC_NAME &&
            cacheName !== CACHE_DYNAMIC_NAME
          ) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

function trimCache(cacheName, maxItem) {
  caches.open(cacheName).then((cache) => {
    return cache.keys().then((keys) => {
      if (keys.length > maxItem) {
        cache.delete(keys[0]).then(trimCache(cacheName, maxItem));
      }
    });
  });
}

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) {
    cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener("fetch", function (event) {
  var url = "/";

  if (event.request.url.indexOf(url) > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
        return fetch(event.request).then(function (res) {
          // trimCache(CACHE_DYNAMIC_NAME, 100);
          cache.put(event.request, res.clone());
          return res;
        });
      })
    );
  } else if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(caches.match(event.request));
  } else {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function (res) {
              return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
                // trimCache(CACHE_DYNAMIC_NAME, 100);
                cache.put(event.request.url, res.clone());
                return res;
              });
            })
            .catch(function (err) {
              return caches.open(CACHE_STATIC_NAME).then(function (cache) {
                if (event.request.headers.get("accept").includes("text/html")) {
                  return cache.match("/offline.html");
                }
              });
            });
        }
      })
    );
  }
});
