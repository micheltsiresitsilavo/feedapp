import useSWR from "swr";
import pb from "../../utils/pbClient";

const useGetVoteStat = (appId) => {
  const fetcher = async () => {
    const lists = await pb
      .collection("votes")
      .getFullList({ expand: "voterId" });
    const res = lists
      .filter((list) => list.appvoteId === appId)
      .filter((item) => item.vote === true);
    return res;
  };

  return useSWR("getVoteApp", fetcher);
};
export default useGetVoteStat;
