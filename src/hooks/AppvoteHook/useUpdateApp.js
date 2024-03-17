/* eslint-disable */
import { useMutation } from "@tanstack/react-query";
import pb from "../../utils/pbClient";
import toast from "react-hot-toast";
import localforage from "localforage";

const useUpdateApp = (appId) => {
  const updateApp = async ({ name, linkDeploy, linkCode }) => {
    const lists = await pb.collection("appvote").getFullList();
    const res = lists.find((list) => list.id === appId);
    await pb
      .collection("appvote")
      .update(res.id, { name, linkDeploy, linkCode });
    const freshData = await pb.collection("appvote").getFullList({
      expand: "author",
    });
    await localforage.setItem("appData", freshData);
  };
  const notify = () =>
    toast.success("Vita update ny app-nao", {
      duration: 4000,
      position: "bottom-center",
      // Custom Icon
      icon: "👏",
    });
  return useMutation({
    mutationFn: updateApp,
    onSuccess: () => notify(),
  });
};
export default useUpdateApp;
