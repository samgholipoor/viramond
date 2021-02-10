import { useMutation, useQuery } from "react-query";
import http from "./https-api";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const mainUrl = process.env.REACT_APP_API_URL;
// const ACCESS_TOKEN = "__hayat_accesstoken__";
const getUsersEndPoint = "api/v1/Admin/ManageAccount/GetUsers";
const ActiveUserEndPoint = "api/v1/Admin/ManageAccount/ActiveUser";

const GetUsers = async () => {
  // const token = Cookies.get(ACCESS_TOKEN);
  const { data } = await http.get(`${mainUrl}${getUsersEndPoint}`);
  return data.data;
};

const GetUserById = async (userId) => {
  const { data } = await http.get(`${mainUrl}${getUsersEndPoint}/${userId}`);
  return data.data;
};

const ActiveUser = async (userForm) => {
  const { data } = await http.post(`${mainUrl}${ActiveUserEndPoint}`, userForm);
  return data;
};

export const UseGetUsers = () => {
  return useQuery(["GetUsers"], GetUsers);
};
export const UseGetUserById = () => {
  return useMutation(GetUserById);
};
export const UseActiveUser = () => {
  return useMutation(ActiveUser);
};
