import { useMutation } from "react-query";
import http from "./https-api";

const mainUrl = process.env.REACT_APP_API_URL;
const characterEndPoint = "api/character";

const SearchGender = async (searchValue) => {
  const { data } = await http.get(
    `${mainUrl}${characterEndPoint}`,
    searchValue
  );
  return data;
};

// custom hooks
export const UseSearchGender = () => {
  return useMutation(SearchGender);
};
