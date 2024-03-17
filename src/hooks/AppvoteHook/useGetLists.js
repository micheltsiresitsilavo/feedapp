import useSWR from "swr";

import pb from "../../utils/pbClient";

import localforage from "localforage";

const useGetLists = () => {
  const fetcher = async () => {
    const lists = await pb.collection("appvote").getFullList({
      expand: "author",
    });
    const profileStore = await localforage.getItem("profileStore");
    const res = lists.filter((list) => list.author === profileStore.id);

    return res;
  };

  return useSWR("getListAppLog", fetcher);
};
export default useGetLists;
