/* eslint-disable */
import { useMutation } from "@tanstack/react-query";
import pb from "../utils/pbClient";

const useUpdate = () => {
  const updateProfile = async ({
    name,
    lastname,
    role,
    biographie,
    facebook,
    linkdin,
  }) => {
    const profiles = await pb.collection("suppervisors").getFullList();
    const res = profiles.find(
      (profile) => profile.auth === pb.authStore.model.id
    );
    await pb
      .collection("suppervisors")
      .update(res.id, { name, lastname, role, biographie, facebook, linkdin });
  };

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => console.log("Update ok"),
  });
};
export default useUpdate;
