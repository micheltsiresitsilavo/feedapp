import { Link } from "react-router-dom";

const PortaCaptif = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="stack w-60 sm:w-auto">
        <div className="card shadow-md bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title  ">Not allowed</h2>
            <p>
              Please{" "}
              <Link
                to="/login"
                className="link link-hover text-gray-900 font-bold"
              >
                login{" "}
              </Link>
              to use this fonctionality or{" "}
              <Link
                to="/register"
                className="link link-hover text-gray-900 font-bold"
              >
                sign up here
              </Link>
            </p>
          </div>
        </div>
        <div className="card shadow bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortaCaptif;
