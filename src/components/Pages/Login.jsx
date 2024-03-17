import { Link } from "react-router-dom";
import clsx from "clsx";
import Lottie from "lottie-react";
import loadingSpin from "../../lotties/loading-animation-blue.json";

import useLogin from "../../hooks/useLogin";
import useFormLogin from "../../hooks/useFormLogin";

const Login = () => {
  const { mutate: login, isLoading, isError } = useLogin();

  const { register, handleSubmit, errors } = useFormLogin();
  const handleLogin = (data) => {
    login({ email: data.email, password: data.password });
  };

  return (
    <div className="hero min-h-screen bg-base-200 max-w-4xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"> Sign In</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                    Email na Password misy diso
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
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <label className="label">
                  <Link
                    to="/resetPwd"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary flex space-x-3 ">
                  <svg
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 md:w-7 h-6 md:h-7"
                    fill="currentColor"
                  >
                    <rect fill="none" height="256" width="256" />
                    <g opacity="0.2">
                      <rect
                        height="79.2"
                        rx="24"
                        transform="translate(-53 128) rotate(-45)"
                        width="135.8"
                        x="60.1"
                        y="88.4"
                      />
                      <rect
                        height="79.2"
                        rx="24"
                        transform="translate(-53 128) rotate(-45)"
                        width="135.8"
                        x="60.1"
                        y="88.4"
                      />
                    </g>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="80"
                      x2="24"
                      y1="176"
                      y2="232"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="232"
                      x2="176"
                      y1="24"
                      y2="80"
                    />
                    <rect
                      fill="none"
                      height="79.2"
                      rx="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      transform="translate(-53 128) rotate(-45)"
                      width="135.8"
                      x="60.1"
                      y="88.4"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="92"
                      x2="164"
                      y1="92"
                      y2="164"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="224"
                      x2="200"
                      y1="160"
                      y2="152"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="56"
                      x2="32"
                      y1="104"
                      y2="96"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="96"
                      x2="104"
                      y1="32"
                      y2="56"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                      x1="152"
                      x2="160"
                      y1="200"
                      y2="224"
                    />
                  </svg>
                  <span className="text-sm md:text-lg ">Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
