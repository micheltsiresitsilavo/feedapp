import useGetFullLists from "./useGeFullLists";
import useSWR from "swr";

const useFilterName = (text) => {
  const { data, isLoading } = useGetFullLists();
  const filterData = () => {
    const res = data.filter((item) => item.name.toLowerCase() === text);
    return {
      res,
      isLoad: isLoading,
    };
  };
  return useSWR("appFilter", filterData);
};
export default useFilterName;
