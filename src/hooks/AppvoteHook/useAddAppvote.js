import pb from "../../utils/pbClient";
import { useMutation } from "@tanstack/react-query";

import { useSnapshot } from "valtio";
import { stateStore } from "../../store/valtioStore";
import localforage from "localforage";

const useAddAppvote = () => {
  //   const navigate = useNavigate();
  const { profileFromStore } = useSnapshot(stateStore);

  /**
   * Add appvote
   */

  const addAppVote = async ({ name, linkDeploy, linkCode, description }) => {
    const data = {
      name,
      linkDeploy,
      linkCode,
      description,
      author: profileFromStore.id,
    };
    await pb.collection("appvote").create(data);
    const freshData = await pb.collection("appvote").getFullList({
      expand: "author",
    });
    await localforage.setItem("appData", freshData);
  };

  return useMutation({
    mutationFn: addAppVote,
  });
};
export default useAddAppvote;
