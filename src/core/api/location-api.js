import { useMutation, useQuery } from "react-query";
import http from "./https-api";
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const mainUrl = process.env.REACT_APP_API_URL;
// const ACCESS_TOKEN = "__hayat_accesstoken__";

const getStatesEndPoint = "api/v1/Location/GetStates";
const addStateEndPoint = "api/v1/Location/AddState";
const getCitiesEndPoint = "api/v1/Location/GetCities";
const addCityEndPoint = "api/v1/Location/AddCity";
const getAllCitiesEndPoint = "api/v1/Location/GetAllCities";

const AddState = async (stateInfo) => {
  const { data } = await http.post(`${mainUrl}${addStateEndPoint}`, stateInfo);
  return data;
};

const GetStates = async () => {
  const { data } = await http.get(`${mainUrl}${getStatesEndPoint}`);
  return data.data;
};

const AddCity = async (stateInfo) => {
  const { data } = await http.post(`${mainUrl}${addCityEndPoint}`, stateInfo);
  return data;
};

const GetCities = async (id) => {
  const { data } = await http.get(`${mainUrl}${getCitiesEndPoint}/${id}`);
  return data.data;
};

const GetAllCities = async () => {
  const { data } = await http.get(`${mainUrl}${getAllCitiesEndPoint}`);
  return data.data;
};

// custom hooks
export const UseAddState = () => {
  return useMutation(AddState);
};
export const UseGetStates = () => {
  return useQuery(["GetStates"], GetStates);
};
export const UseAddCity = () => {
  return useMutation(AddCity);
};
export const UseGetCities = () => {
  return useMutation(GetCities);
};
export const UseGetAllCities = () => {
  return useQuery(["GetAllCities"], GetAllCities);
};
