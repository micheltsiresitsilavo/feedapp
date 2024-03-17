import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidation from "./useValidation";

const useFormAdmin = () => {
  const { adminValidation } = useValidation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminValidation),
  });
  return { register, handleSubmit, errors, reset };
};

export default useFormAdmin;
