import axios from "axios";
import Cookie from "js-cookie";
import { toast } from "react-toastify";

const https = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
const accesstoken = "__hayat_accesstoken__";

axios.interceptors.request.use(
  (response) => {
    // const accessToken = Cookie.get(accesstoken);
    // response.headers.common["Authorization"] = `Bearer Bearer ${accessToken}`;

    return response;
  }
  // (error) => {
  //   return Promise.reject(error);
  // }
);

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("اینترنت خود را بررسی کنید");
    return Promise.reject(error);
  }

  if (error?.response?.status === 404) {
    toast.error("خطایی رخ داده!");
    return Promise.reject(error);
  }

  if (error?.response?.status === 401 || error?.response?.status === 403) {
    toast.error("لطفا وارد حساب کاربری خود شوید");
    Cookie.remove(accesstoken);
    return Promise.reject(error);
  }

  if (400 <= error?.response?.status && error?.response?.status <= 500) {
    error?.response?.data?.errors?.map((err) => toast.error(err));
  }

  return Promise.reject(error);
});

export default https;
