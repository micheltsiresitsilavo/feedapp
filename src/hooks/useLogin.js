import { useMutation } from "@tanstack/react-query";
import pb from "../utils/pbClient";
import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const loginFn = async ({ email, password }) => {
    await pb.collection("auths").authWithPassword(email, password);
    mutate("setProfile");
  };

  return useMutation({
    mutationFn: loginFn,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });
};

export default useLogin;
