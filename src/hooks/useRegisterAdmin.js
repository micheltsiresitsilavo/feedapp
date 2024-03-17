import pb from "../utils/pbClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useRegisterAdmin = () => {
  const navigate = useNavigate();

  /**
   * Register function for admin client
   */
  const registerAdminClient = async ({
    name,
    email,
    password,
    passwordConfirm,
    status,
  }) => {
    const data = {
      email,
      password,
      passwordConfirm,
      status,
    };
    const resp = await pb.collection("auths").create(data);
    await pb.collection("suppervisors").create({
      auth: resp.id,
      name,
      role: data.status,
    });
    await pb.collection("auths").requestVerification(email);
  };
  return useMutation({
    mutationFn: registerAdminClient,
    onSuccess: () => navigate("/login"),
  });
};
export default useRegisterAdmin;
