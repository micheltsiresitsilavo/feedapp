import useSWR from "swr";

const useVoteFilter = (votes, appId) => {
  const voteFilterTrue = () => {
    const voteById = votes?.filter((item) => item.appvoteId === appId);
    return voteById?.filter((item) => item.vote === true);
  };
  return useSWR("appVoteFilter", voteFilterTrue);
};
export default useVoteFilter;
