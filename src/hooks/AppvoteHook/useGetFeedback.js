import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetFeedback = (appId) => {
  const fetcher = async () => {
    const lists = await pb.collection("feedbacks").getFullList({
      expand: "feedbacker",
    });
    const res = lists.filter((list) => list.appvoteId === appId);
    return res;
  };

  return useSWR("getFeedback", fetcher);
};
export default useGetFeedback;
