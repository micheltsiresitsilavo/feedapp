import pb from "../../utils/pbClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import { stateStore } from "../../store/valtioStore";

const useIsVote = () => {
  /**
   * Add vote
   */
  const { profileFromStore } = useSnapshot(stateStore);

  const checkIsVote = async (parama) => {
    const findVoter = parama.find(
      (item) => item.voterId === profileFromStore?.id
    );

    return findVoter;
  };

  return useMutation({
    mutationFn: checkIsVote,
  });
};
export default useIsVote;
