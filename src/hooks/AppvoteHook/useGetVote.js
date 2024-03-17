import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetVotes = () => {
  const fetcher = async () => {
    const res = await pb.collection("votes").getFullList();
    return res;
  };

  return useSWR("getListVotes", fetcher);
};
export default useGetVotes;
