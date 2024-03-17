import { proxy } from "valtio";
import pb from "../utils/pbClient";
import  jwtDecode  from "jwt-decode";
import ms from "ms";
import localforage from "localforage";

const profileInit = async () => {
  if (pb.authStore.model) {
    return localforage.getItem("profileStore");
  }
};

const getInitialData = async () => {
  const dataInit = await localforage.getItem("appData");
  if (!dataInit) {
    await localforage.setItem("appData");
  }
  return dataInit;
};

export const stateStore = proxy({
  token: pb.authStore.token,
  user: pb.authStore.model,
  isAuth: pb.authStore.isValid,
  prevRoutePath: "",
  profileFromStore: profileInit(),
  appData: getInitialData(),
});

/**
 * Refresh Session
 *
 */

export const refreshSession = async () => {
  const dimyMinutesInMs = ms("5 minutes");
  if (!stateStore.isAuth) return;
  const decodedToken = jwtDecode(stateStore.token);
  const tokenExpiration = decodedToken.exp;
  const expirationWithBuffer = (tokenExpiration + dimyMinutesInMs) / 1000;
  if (tokenExpiration < expirationWithBuffer) {
    pb.collection("auths").authRefresh;
  }
};

export const catchPrevRoutePath = (path) => (stateStore.prevRoutePath = path);

export const setData = async (data) => {
  const response = await localforage.setItem("appData", data);
  stateStore.appData = response;
};
