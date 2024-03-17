import * as yup from "yup";

const useValidation = () => {
  const adminValidation = yup.object({
    name: yup.string().min(2).max(255).required("Nom du group is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Votre email is required"),
    password: yup.string().min(8).required("Votre password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't matches")
      .required(),
    role: yup.string().required("Votre status is required"),
  });

  const loginValidation = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Votre email is required"),
    password: yup.string().min(8).required("Votre password is required"),
  });

  const addGroupValidation = yup.object({
    name: yup.string().min(5).max(255).required("Nom du group is required"),
    category: yup.string().required("Category ny group adino"),
    description: yup.string().max(255).required("Description'ny group adino"),
  });

  const addAppvoteValidation = yup.object({
    name: yup.string().min(4).max(255).required("App name is required"),
    linkDeploy: yup.string().max(255).required("Link of your app required"),
    description: yup
      .string()
      .max(255)
      .required("Description of your app required"),
  });

  const iconAppValidation = yup.object({
    iconapp: yup.mixed().required("Required"),
  });

  return {
    adminValidation,
    loginValidation,
    addGroupValidation,
    addAppvoteValidation,
    iconAppValidation,
  };
};

export default useValidation;
