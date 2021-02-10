import { useMutation, useQuery } from "react-query";
import http from "./https-api";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const mainUrl = process.env.REACT_APP_API_URL;
// const ACCESS_TOKEN = "__hayat_accesstoken__";

const addRoleEndPoint = "api/v1/Admin/ManageAccount/AddRole";
const getRolesEndPoint = "api/v1/Admin/ManageAccount/GetRoles";
const addRolesToUserEndPoint = "api/v1/Admin/ManageAccount/AddRoleToUser";

const AddRole = async (roleForm) => {
  const { data } = await http.post(`${mainUrl}${addRoleEndPoint}`, roleForm);
  return data;
};

const GetRoles = async () => {
  const { data } = await http.get(`${mainUrl}${getRolesEndPoint}`);
  return data.data;
};

const GetRolesByUserId = async (userId) => {
  const { data } = await http.get(`${mainUrl}${getRolesEndPoint}/${userId}`);
  return data.data;
};

const AddRolesToUser = async (userForm) => {
  const { data } = await http.post(
    `${mainUrl}${addRolesToUserEndPoint}`,
    userForm
  );
  return data.data;
};

// custom hooks
export const UseAddRole = () => {
  return useMutation(AddRole);
};
export const UseGetRoles = () => {
  return useQuery(["GetRoles"], GetRoles);
};
export const UseGetRolesByUserId = () => {
  return useMutation(GetRolesByUserId);
};
export const UseAddRolesToUser = () => {
  return useMutation(AddRolesToUser);
};
