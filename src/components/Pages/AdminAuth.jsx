import clsx from "clsx";

const AdminAuth = () => {
  const error = false;
  return (
    <div className=" min-h-screen bg-base-200 max-w-5xl mx-auto">
      <div className="card flex-shrink-0 w-full mt-10 max-w-sm shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 mx-auto"
          >
            <rect fill="none" height="256" width="256" />
            <circle cx="64" cy="168" opacity="0.2" r="40" />
            <circle cx="192" cy="168" opacity="0.2" r="40" />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="104"
              x2="152"
              y1="92"
              y2="92"
            />
            <path
              d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <circle
              cx="64"
              cy="168"
              fill="none"
              r="40"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <circle
              cx="192"
              cy="168"
              fill="none"
              r="40"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <h2 className="card-title mx-auto text-center">Access for Admin</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              // className="input input-bordered input-error"
              // className={
              //   error
              //     ? "input input-bordered input-error"
              //     : "input input-bordered "
              // }
              className={clsx("input input-bordered", error && "input-error")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Access Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
