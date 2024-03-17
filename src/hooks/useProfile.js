import useSWR from "swr";
import { useSnapshot } from "valtio";
import { stateStore } from "../store/valtioStore";
import pb from "../utils/pbClient";
import localforage from "localforage";

const useProfile = () => {
  const { user } = useSnapshot(stateStore);

  const fetcher = async () => {
    const resp = await pb
      .collection("suppervisors")
      .getFirstListItem(`auth="${user.id}"`);
    return resp;
  };

  const { data } = useSWR("setProfile", fetcher);
  if (data) stateStore.profileFromStore = data;
  if (data) {
    localforage.setItem("profileStore", data);
  }
};
export default useProfile;
