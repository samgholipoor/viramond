import { useMutation } from "react-query";
import http from "./https-api";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
// import jwtDecode from "jwt-decode";

const ACCESS_TOKEN = "__hayat_accesstoken__";
const REFRESH_TOKEN = "__hayat_refreshtoken__";

const mainUrl = process.env.REACT_APP_API_URL;
const registerEndPoint = "api/v1/Account/RegisterPhoneNumber";
const verificationEndPoint = "api/v1/Account/VerifyPhoneNumber";
const getSMSCodeEndPoint = "api/v1/Account/GetSMSCode";
const completeRegisterEndPoint = "api/v1/Account/RegisterCompanyGuild";
const loginEndPoint = "api/v1/Account/Login";
const refreshTokenEndPoint = "api/v1/Account/RefreshToken";

const RegisterUser = async (phoneNumber) => {
  const { data } = await http.post(
    `${mainUrl}${registerEndPoint}`,
    phoneNumber
  );
  return data.data;
};

const VerifySms = async (verifyBody) => {
  const { data } = await http.post(
    `${mainUrl}${verificationEndPoint}`,
    verifyBody
  );
  return data;
};

const GetSMSCode = async (phoneNumber) => {
  const { data } = await http.get(
    `${mainUrl}${getSMSCodeEndPoint}?PhoneNumber=${phoneNumber}`
  );
  return data;
};

const CompleteRegister = async (body) => {
  const { data } = await http.post(
    `${mainUrl}${completeRegisterEndPoint}`,
    body
  );
  return data.data;
};

export const LoginUser = async (body) => {
  const { data } = await http.post(`${mainUrl}${loginEndPoint}`, body);
  const accessToken = data.data.accessToken;
  const refreshToken = data.data.refreshToken;

  handleUserResponse(accessToken, refreshToken);
  return jwtDecode(data.data.accessToken);
};

const RefreshToken = async (refreshTokenValue) => {
  const { data } = await http.post(`${mainUrl}${refreshTokenEndPoint}`, {
    refreshTokenValue: refreshTokenValue,
  });
  const accessToken = data.data.accessToken;
  const refreshToken = data.data.refreshToken;
  Cookies.set(ACCESS_TOKEN, accessToken);
  Cookies.set(REFRESH_TOKEN, refreshToken);
};

const refreshAccessToken = async () => {
  const refreshToken = GetRefreshToken();
  if (refreshToken) {
    await RefreshToken(refreshToken);
  }
};

async function handleUserResponse(accessToken, refreshToken) {
  // const expTime = jwtDecode(accessToken)?.exp * 1000;
  // var expireTime = new Date(expTime);

  Cookies.set(ACCESS_TOKEN, accessToken);
  Cookies.set(REFRESH_TOKEN, refreshToken);

  const user = await GetUser();
  return user;
}

export async function GetUser() {
  const token = GetRefreshToken();
  const accessToken = GetToken();

  if (!token) {
    return Promise.resolve(null);
  }
  await refreshAccessToken();
  if (accessToken) {
    const user = jwtDecode(accessToken);
    return user;
  } else {
    Logout();
  }
}

function silentRefresh() {
  setTimeout(() => {
    refreshAccessToken();
    silentRefresh();
  }, 600000);
}

silentRefresh();

export function GetToken() {
  return Cookies.get(ACCESS_TOKEN);
}

export function GetRefreshToken() {
  return Cookies.get(REFRESH_TOKEN);
}

export function IsLoggedIn() {
  return Boolean(GetToken());
}

export function GetRole() {
  const token = GetToken();
  if (token) {
    return jwtDecode(token);
  }
}

export function Logout() {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
  return Promise.resolve();
}

// custom hooks

export const UseRegisterUser = () => {
  return useMutation(RegisterUser);
};

export const UseVerifySms = () => {
  return useMutation(VerifySms);
};

export const UseGetSMSCode = () => {
  return useMutation(GetSMSCode);
};

export const UseCompleteRegister = () => {
  return useMutation(CompleteRegister);
};
