import { Link } from "react-router-dom";
import clsx from "clsx";
import Lottie from "lottie-react";
import useFormAdmin from "../../../hooks/useFormAdmin";
import useRegisterAdmin from "../../../hooks/useRegisterAdmin";
import loadingSpin from "../../../lotties/loading-animation-blue.json";
import { Toaster } from "react-hot-toast";

const RegisterAdmin = () => {
  const { register, handleSubmit, errors, reset } = useFormAdmin();
  const { mutate: registerFn, isLoading, isError } = useRegisterAdmin();

  const handleRegister = async (data) => {
    const dataToRegister = {
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      status: data.role,
    };
    registerFn(dataToRegister);
    reset();
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">
          {" "}
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <rect fill="none" height="256" width="256" />
            <path
              d="M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z"
              opacity="0.2"
            />
            <circle
              cx="128"
              cy="120"
              fill="none"
              r="40"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="16"
            />
            <path
              d="M63.8,199.4a72,72,0,0,1,128.4,0"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="176"
              x2="224"
              y1="56"
              y2="56"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="200"
              x2="200"
              y1="32"
              y2="80"
            />
            <path
              d="M222.8,112.9A93.3,93.3,0,0,1,224,128a96,96,0,1,1-96-96,93.3,93.3,0,0,1,15.1,1.2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          Sign Up
        </h1>
        <p className="py-6">
          By creating an account, you agree to our terms and conditions and
          privacy policy.
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
        {isError && (
          <div className="p-2">
            <div className="alert alert-error  shadow-lg">
              <div className="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-md text-center">
                  Mety efa tafiditra ato mail ampidirinao io
                </span>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="absolute grid   bg-green-300/2 w-full h-full rounded-lg backdrop-filter backdrop-blur-sm">
            <Lottie animationData={loadingSpin} className="w-80 mx-auto" />
          </div>
        )}

        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="Your name"
              className={clsx(
                "input input-bordered",
                errors.name?.message && "input-error"
              )}
              {...register("name")}
            />
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.name?.message}
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className={clsx(
                "input input-bordered",
                errors.email?.message && "input-error"
              )}
              {...register("email")}
            />
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.email?.message}
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={clsx(
                "input input-bordered",
                errors.password?.message && "input-error"
              )}
              {...register("password")}
            />
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.password?.message}
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirmation Password</span>
            </label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirmation password"
              className={clsx(
                "input input-bordered",
                errors.passwordConfirm?.message && "input-error"
              )}
              {...register("passwordConfirm")}
            />
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.passwordConfirm?.message}
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              name="role"
              placeholder="Eg: Web Developer/Web Designer"
              className={clsx(
                "input input-bordered",
                errors.role?.message && "input-error"
              )}
              {...register("role")}
            />
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.role?.message}
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary flex  space-x-3">
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 md:w-7 h-6 md:h-7"
              >
                <rect fill="none" height="256" width="256" />
                <path
                  d="M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z"
                  opacity="0.2"
                />
                <circle
                  cx="128"
                  cy="120"
                  fill="none"
                  r="40"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="16"
                />
                <path
                  d="M63.8,199.4a72,72,0,0,1,128.4,0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="176"
                  x2="224"
                  y1="56"
                  y2="56"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="200"
                  x2="200"
                  y1="32"
                  y2="80"
                />
                <path
                  d="M222.8,112.9A93.3,93.3,0,0,1,224,128a96,96,0,1,1-96-96,93.3,93.3,0,0,1,15.1,1.2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>{" "}
              <span className="text-sm md:text-lg">Register</span>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterAdmin;
