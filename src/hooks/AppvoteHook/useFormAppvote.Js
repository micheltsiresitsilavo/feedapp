import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidation from "../useValidation";

const useFormAppvote = () => {
  const { addAppvoteValidation } = useValidation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addAppvoteValidation),
  });
  return { register, handleSubmit, errors, reset };
};

export default useFormAppvote;
