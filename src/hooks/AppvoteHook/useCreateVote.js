import pb from "../../utils/pbClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import { stateStore } from "../../store/valtioStore";
import { useSWRConfig } from "swr";

const notify = (isVote) => {
  if (isVote) {
    return toast.success("You like again this app, thank you", {
      duration: 4000,
      position: "bottom-center",
      // Custom Icon
      icon: "👏",
    });
  }
  toast.success("Dislike, thank you", {
    duration: 4000,
    position: "bottom-center",
    // Custom Icon
    icon: "👏",
  });
};

const notify2 = () => {
  toast.success("Thank's to like this app", {
    duration: 4000,
    position: "bottom-center",
    // Custom Icon
    icon: "👏",
  });
};

const useCreateVote = () => {
  /**
   * Add vote
   */
  const { profileFromStore } = useSnapshot(stateStore);
  const { mutate } = useSWRConfig();
  const addVote = async (appvoteId) => {
    const data = {
      voterId: profileFromStore?.id,
      appvoteId,
      vote: true,
    };
    const allVotes = await pb.collection("votes").getFullList();
    const res = allVotes.filter((item) => item.appvoteId === appvoteId);
    const findVoter = res.find((item) => item.voterId === profileFromStore?.id);

    if (findVoter) {
      const res = await pb
        .collection("votes")
        .update(findVoter.id, { vote: !findVoter.vote });
      mutate("getVoteApp");
      notify(res.vote);
    } else {
      const res = await pb.collection("votes").create(data);
      notify2(res.vote);
    }
  };

  return useMutation({
    mutationFn: addVote,
  });
};
export default useCreateVote;
