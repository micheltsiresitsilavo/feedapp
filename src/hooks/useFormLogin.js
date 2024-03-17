import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidation from "./useValidation";

const useFormLogin = () => {
  const { loginValidation } = useValidation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  return { register, handleSubmit, errors, reset };
};

export default useFormLogin;
