import pb from "../utils/pbClient";
import { stateStore } from "../store/valtioStore";
import { useSnapshot } from "valtio";
import { useQuery } from "@tanstack/react-query";

const useGetOne = () => {
  const { user } = useSnapshot(stateStore);
  const getOneRecord = async () => {
    const profiles = await pb
      .collection("suppervisors")
      .getFullList({ expand: "auth" });
    const res = profiles.find((profile) => profile.auth === user.id);
    return res;
  };
  return useQuery({ queryFn: getOneRecord, queryKey: ["getOneRecord"] });
};

export default useGetOne;
