import { useForm } from "react-hook-form";

const useFormAccount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, errors, reset };
};

export default useFormAccount;
