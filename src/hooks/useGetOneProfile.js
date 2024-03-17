import useSWR from "swr";

import pb from "../utils/pbClient";

const useGetOneProfile = (profileId) => {
  const fetcher = async () => {
    const resp = await pb
      .collection("suppervisors")
      .getFirstListItem(`id="${profileId}"`);
    return resp;
  };

  return useSWR("getOneProfile", fetcher);
};
export default useGetOneProfile;
