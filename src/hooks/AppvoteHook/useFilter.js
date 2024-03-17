import localforage from "localforage";
import useGetFullLists from "./useGeFullLists";
import useSWR from "swr";

const useFilter = (text) => {
  const { data, isLoading } = useGetFullLists();

  const filterData = async () => {
    const appData = await localforage.getItem("appData");
    if (appData) {
      const res = appData.filter((item) =>
        item.name.toLowerCase().includes(text)
      );
      const resp = res.filter((item) => item.isPublish === true);
      return {
        resp,
        isLoad: isLoading,
      };
    } else {
      const res = data.filter((item) => item.name.toLowerCase().includes(text));
      const resp = res.filter((item) => item.isPublish === true);

      return {
        resp,
        isLoad: isLoading,
      };
    }
  };
  return useSWR("appFilter", filterData);
};
export default useFilter;
