import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetFullLists = () => {
  const fetcher = async () => {
    const lists = await pb.collection("appvote").getFullList({
      expand: "author",
    });

    return lists;
  };

  return useSWR("getListApp", fetcher);
};
export default useGetFullLists;
