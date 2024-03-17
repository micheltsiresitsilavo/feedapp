import { Link, useNavigate } from "react-router-dom";
import { LinkActv, Nav } from "./Nav";
import { useSnapshot } from "valtio";
import { stateStore } from "../../store/valtioStore";
import localforage from "localforage";
import pb from "../../utils/pbClient";
import { motion } from "framer-motion";
const Header = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const { user, profileFromStore } = useSnapshot(stateStore);

  const navigate = useNavigate();
  const logoutFn = async () => {
    await localforage.clear();
    pb.authStore.clear();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100/30 sticky top-0 z-40 backdrop-filter backdrop-blur-lg border-b border-slate-600 ">
      <div className="navbar-start">
        <div className="dropdown lg:hidden ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 "
          >
            {/* Check if auth user exist */}
            {user?.id ? (
              <>
                <li>
                  <Nav to="/">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <rect fill="none" height="256" width="256" />
                      <path
                        d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z"
                        opacity="0.2"
                      />
                      <path
                        d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
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
                        x1="16"
                        x2="240"
                        y1="216"
                        y2="216"
                      />
                      <path
                        d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                    </svg>
                    Home
                  </Nav>
                </li>
                <li>
                  <Nav to="portal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z"></path>
                    </svg>
                    Apps
                  </Nav>
                </li>
                <li>
                  <Nav to="dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
                    </svg>
                    Dashboard
                  </Nav>
                </li>
                <li>
                  <Nav to="profile">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <rect fill="none" height="256" width="256" />
                      <circle cx="108" cy="100" opacity="0.2" r="60" />
                      <circle
                        cx="108"
                        cy="100"
                        fill="none"
                        r="60"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="16"
                      />
                      <path
                        d="M22.2,200a112,112,0,0,1,171.6,0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                      <circle
                        cx="220"
                        cy="136"
                        fill="none"
                        r="16"
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
                        x1="220"
                        x2="220"
                        y1="120"
                        y2="108"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="206.1"
                        x2="195.8"
                        y1="128"
                        y2="122"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="206.1"
                        x2="195.8"
                        y1="144"
                        y2="150"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="220"
                        x2="220"
                        y1="152"
                        y2="164"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="233.9"
                        x2="244.2"
                        y1="144"
                        y2="150"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="233.9"
                        x2="244.2"
                        y1="128"
                        y2="122"
                      />
                    </svg>
                    Profile
                  </Nav>
                </li>

                <li>
                  <button onClick={logoutFn}>
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <rect fill="none" height="256" width="256" />
                      <path
                        d="M132,180l-31,31a24,24,0,0,1-34,0L45,189a24,24,0,0,1,0-34l31-31Z"
                        opacity="0.2"
                      />
                      <path
                        d="M180,132l31-31a24,24,0,0,0,0-34L189,45a24,24,0,0,0-34,0L124,76Z"
                        opacity="0.2"
                      />
                      <path
                        d="M132,180l-31,31a24,24,0,0,1-34,0L45,189a24,24,0,0,1,0-34l31-31"
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
                        x1="56"
                        x2="24"
                        y1="200"
                        y2="232"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="232"
                        x2="200"
                        y1="24"
                        y2="56"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="144"
                        x2="120"
                        y1="144"
                        y2="168"
                      />
                      <line
                        fill="#231f20"
                        x1="144"
                        x2="120"
                        y1="144"
                        y2="168"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="112"
                        x2="88"
                        y1="112"
                        y2="136"
                      />
                      <line fill="#231f20" x1="112" x2="88" y1="112" y2="136" />
                      <path
                        d="M180,132l31-31a24,24,0,0,0,0-34L189,45a24,24,0,0,0-34,0L124,76"
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
                        x1="116"
                        x2="188"
                        y1="68"
                        y2="140"
                      />
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        x1="68"
                        x2="140"
                        y1="116"
                        y2="188"
                      />
                    </svg>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <div>
                <li>
                  <Nav to="/">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <rect fill="none" height="256" width="256" />
                      <path
                        d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z"
                        opacity="0.2"
                      />
                      <path
                        d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
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
                        x1="16"
                        x2="240"
                        y1="216"
                        y2="216"
                      />
                      <path
                        d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      />
                    </svg>
                    Home
                  </Nav>
                </li>
                <li>
                  <Nav to="portal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z"></path>
                    </svg>
                    Apps
                  </Nav>
                </li>
                <li className="dark:text-slate-50 dark:font-semibold ">
                  <Nav to="login ">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                    Login
                  </Nav>
                </li>
                <li className="dark:text-slate-50 dark:font-semibold">
                  <Nav to="register">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                    Register
                  </Nav>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="navbar-center"
      >
        <Link to="/portal" className=" text-xl shadow-lg">
          <span className="bg-slate-500 pl-2 py-1 text-slate-100 font-semibold">
            Feed
          </span>
          <span className="bg-gray-700 pr-2 py-1 text-slate-100 font-semibold">
            App
          </span>
        </Link>
      </motion.div>

      {user?.id ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="navbar-end gap-2"
        >
          <LinkActv to="/">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Home"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 tooltip tooltip-bottom"
                data-tip="Home"
              >
                <rect fill="none" height="256" width="256" />
                <path
                  d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z"
                  opacity="0.2"
                />
                <path
                  d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
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
                  x1="16"
                  x2="240"
                  y1="216"
                  y2="216"
                />
                <path
                  d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
            </span>
          </LinkActv>
          <LinkActv to="/portal">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Apps"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z"></path>
              </svg>
            </span>
          </LinkActv>
          <LinkActv to="/dash">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
              </svg>
            </span>
          </LinkActv>
          <LinkActv to="/profile">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Profile"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <rect fill="none" height="256" width="256" />
                <circle cx="108" cy="100" opacity="0.2" r="60" />
                <circle
                  cx="108"
                  cy="100"
                  fill="none"
                  r="60"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="16"
                />
                <path
                  d="M22.2,200a112,112,0,0,1,171.6,0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle
                  cx="220"
                  cy="136"
                  fill="none"
                  r="16"
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
                  x1="220"
                  x2="220"
                  y1="120"
                  y2="108"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="206.1"
                  x2="195.8"
                  y1="128"
                  y2="122"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="206.1"
                  x2="195.8"
                  y1="144"
                  y2="150"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="220"
                  x2="220"
                  y1="152"
                  y2="164"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="233.9"
                  x2="244.2"
                  y1="144"
                  y2="150"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="233.9"
                  x2="244.2"
                  y1="128"
                  y2="122"
                />
              </svg>
            </span>
          </LinkActv>
          <Link to="/dashboard/avatar_handler" className="avatar px-8">
            {profileFromStore?.avatar ? (
              <div className="w-12 mask mask-hexagon cursor-pointer">
                <img
                  src={`${pbClientEnv}/api/files/${profileFromStore.collectionName}/${profileFromStore.id}/${profileFromStore.avatar}`}
                />
              </div>
            ) : (
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${profileFromStore?.name}+${profileFromStore?.lastname}&background=random`}
                />
              </div>
            )}
          </Link>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="navbar-end gap-2"
        >
          <LinkActv to="/">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Home"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 tooltip tooltip-bottom"
                data-tip="Home"
              >
                <rect fill="none" height="256" width="256" />
                <path
                  d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z"
                  opacity="0.2"
                />
                <path
                  d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
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
                  x1="16"
                  x2="240"
                  y1="216"
                  y2="216"
                />
                <path
                  d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
            </span>
          </LinkActv>
          <LinkActv to="/portal">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Apps"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z"></path>
              </svg>
            </span>
          </LinkActv>
          <LinkActv to="/login">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Sign In"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
            </span>
          </LinkActv>
          <LinkActv to="/register">
            <span
              className="tooltip tooltip-bottom flex items-center py-1"
              data-tip="Sign Up"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
            </span>
          </LinkActv>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
