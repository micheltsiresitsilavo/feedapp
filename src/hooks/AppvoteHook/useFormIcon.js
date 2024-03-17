import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidation from "../useValidation";

const useFormIcon = () => {
  const { iconAppValidation } = useValidation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(iconAppValidation),
  });
  return { register, handleSubmit, errors, reset };
};

export default useFormIcon;
