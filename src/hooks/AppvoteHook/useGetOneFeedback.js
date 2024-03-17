import useSWR from "swr";

import pb from "../../utils/pbClient";

const useGetOneFeedback = (feedbackId) => {
  const fetcher = async () => {
    // const lists = await pb.collection("feedbacks").getFullList({
    //   expand: "feedbacker , appvoteId",
    // });
    // const res = lists.find((list) => list.id === feedbackId);

    const res = await pb.collection("feedbacks").getOne(feedbackId, {
      expand: "feedbacker , appvoteId",
    });
    return res;
  };

  return useSWR("getOneFeedback", fetcher);
};
export default useGetOneFeedback;
