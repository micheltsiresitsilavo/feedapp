import useGetFullLists from "./useGeFullLists";
import useSWR from "swr";
import localforage from "localforage";

const useInitDataApp = () => {
  const { data, isLoading } = useGetFullLists();

  const initData = async () => {
    if (!isLoading) {
      const initData = await localforage.getItem("appData");
      if (!initData) {
        await localforage.setItem("appData", data);
      }
    }
  };

  return useSWR("appCache", initData);
};
export default useInitDataApp;
