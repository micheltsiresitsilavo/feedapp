import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetOneApp = (appId) => {
  const fetcher = async () => {
    const lists = await pb.collection("appvote").getFullList({
      expand: "author",
    });
    const res = lists.find((list) => list.id === appId);
    return res;
  };

  return useSWR("getOneApp", fetcher);
};
export default useGetOneApp;
