import { useCallback, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import pb from "../utils/pbClient";
import { useSnapshot } from "valtio";
import {
  stateStore,
  refreshSession,
  catchPrevRoutePath,
} from "../store/valtioStore";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import ms from "ms";
// import useGetFullLists from "../hooks/AppvoteHook/useGeFullLists";
import localforage from "localforage";
import { useInterval } from "usehooks-ts";
import useProfile from "../hooks/useProfile";

const Root = () => {
  const { token, user } = useSnapshot(stateStore);
  // const { data, isLoading } = useGetFullLists();

  useProfile();

  const twoMinutesInMs = ms("2 minutes");
  useInterval(refreshSession, token ? twoMinutesInMs : null);

  const navigate = useNavigate();
  const location = useLocation();

  const initData = useCallback(async () => {
    const resp = await pb
      .collection("suppervisors")
      .getFirstListItem(`auth="${user.id}"`);
    if (resp) {
      stateStore.profileFromStore = resp;
      localforage.setItem("profileStore", resp);
    }
  }, []);

  useEffect(() => {
    catchPrevRoutePath(location.pathname);
    if (!user?.id) {
      return navigate("/");
    }
    initData();
  }, [user]);

  return (
    <div className="bg-base-200 ">
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-xs sm:text-sm font-medium">
          Beta version ity,{" "}
          <span className="inline-block underline">
            mety hisy olana madininika miseho sady maro fonctionnalités mbola hampidirina
          </span>
        </p>
      </div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
