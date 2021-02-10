import { useMutation, useQuery } from "react-query";
import http from "./https-api";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const mainUrl = process.env.REACT_APP_API_URL;
// const ACCESS_TOKEN = "__hayat_accesstoken__";

const createLevelEndPoint = "api/v1/Admin/ManageAccount/CreatLevels";
const addLevelToUserEndPoint = "api/v1/Admin/ManageAccount/AddLevelToUser";
const getLevelsUserEndPoint = "api/v1/Admin/ManageAccount/GetLevelsUser​";
const getLevelsGuildGroupEndPoint =
  "api/v1/Admin/ManageAccount/GetLevelsGuildGroup";

const CreateLevel = async (levelForm) => {
  const { data } = await http.post(
    `${mainUrl}${createLevelEndPoint}`,
    levelForm
  );
  return data;
};

const AddLevelToUser = async (userForm) => {
  const { data } = await http.post(
    `${mainUrl}${addLevelToUserEndPoint}`,
    userForm
  );
  return data;
};

const GetLevelsUser = async () => {
  const { data } = await http.get(`${mainUrl}${getLevelsUserEndPoint}`);
  return data;
};
const GetLevelsGuildGroup = async (id) => {
  const { data } = await http.get(
    `${mainUrl}${getLevelsGuildGroupEndPoint}/${id}`
  );
  return data;
};

// custom hooks
export const UseCreateLevel = () => {
  return useMutation(CreateLevel);
};
export const UseAddLevelToUser = () => {
  return useMutation(AddLevelToUser);
};
export const UseGetLevelsUser = () => {
  return useQuery(["GetLevelsUser"], GetLevelsUser);
};
export const UseGetLevelsGuildGroup = () => {
  return useMutation(GetLevelsGuildGroup);
};
