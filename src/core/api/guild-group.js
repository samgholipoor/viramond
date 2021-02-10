import { useMutation, useQuery } from "react-query";
import http from "./https-api";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const mainUrl = process.env.REACT_APP_API_URL;
// const ACCESS_TOKEN = "__hayat_accesstoken__";

const getGuildGroupsEndPoint = "api/v1/GuildGroup/GetGuildGroups";
const addGuildGroupsEndPoint = "api/v1/GuildGroup/AddGuildGroups";

const AddGuildGroups = async (guildFrom) => {
  const { data } = await http.post(
    `${mainUrl}${addGuildGroupsEndPoint}`,
    guildFrom
  );
  return data;
};

const GetGuildGroups = async () => {
  const { data } = await http.get(`${mainUrl}${getGuildGroupsEndPoint}`);
  return data.data;
};

// custom hooks
export const UseAddGuildGroups = () => {
  return useMutation(AddGuildGroups);
};

export const UseGetGuildGroups = () => {
  return useQuery(["GetGuildGroups"], GetGuildGroups);
};
