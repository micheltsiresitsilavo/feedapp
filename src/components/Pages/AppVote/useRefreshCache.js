import localforage from "localforage";
import pb from "../../../utils/pbClient";
import useSWR from "swr";

const useRefreshCache = () => {
  const refreshCache = async () => {
    const freshData = await pb.collection("appvote").getFullList({
      expand: "author",
    });
    await localforage.setItem("appData", freshData);
  };
  useSWR("refreshCache", refreshCache);
};

export default useRefreshCache;
