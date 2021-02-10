import { LandingPage } from "../../page/landingPage";
import { Adjustment } from "../../page/adjustment";
import { Catalog } from "../../page/catalog";
import { Shop } from "../../page/shop";
import { Search } from "../../page/search";
import { NotFoundPage } from "../../components/common/NotFoundPage";

const routes = [
  { path: "/", exact: true, title: "خانه", component: LandingPage },
  { path: "/adjustment", exact: true, title: "تنظیمات", component: Adjustment },
  { path: "/catalog", exact: true, title: "کاتالوگ", component: Catalog },
  { path: "/shop", exact: true, title: "نمایشگاه", component: Shop },
  { path: "/search", exact: true, title: "جستجو", component: Search },
  {
    path: "/not-found-page",
    exact: true,
    title: "پیج مورد نظر یافت نشد",
    component: NotFoundPage,
  },
];

export { routes };
