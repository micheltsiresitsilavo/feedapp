import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetAppByUserId = (userId) => {
  const fetcher = async () => {
    const lists = await pb.collection("appvote").getFullList();

    const res = lists.filter((list) => list.author === userId);

    return res;
  };

  return useSWR("getListAppByUSerId", fetcher);
};
export default useGetAppByUserId;
