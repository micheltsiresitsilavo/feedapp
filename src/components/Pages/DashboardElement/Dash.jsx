import { Outlet, useNavigate } from "react-router-dom";
import { LinkSideBar } from "../../partials/Nav";
import pb from "../../../utils/pbClient";
import localforage from "localforage";

import { stateStore } from "../../../store/valtioStore";
import { useEffectOnce } from "usehooks-ts";
import { useSnapshot } from "valtio";
const Dash = () => {
  const navigate = useNavigate();
  const { user } = useSnapshot(stateStore);
  const logoutFn = async () => {
    await localforage.removeItem("profileStore");
    await localforage.removeItem("appData");
    stateStore.profileFromStore = {};
    pb.authStore.clear();

    navigate("/login");
  };
  useEffectOnce(() => {
    if (!user) {
      return navigate("/login");
    }
  });

  return (
    <div className="flex ">
      <div className="flex h-auto w-16 flex-col justify-between border-e bg-gray-700 border-slate-500">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <LinkSideBar to="/dash">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                style={{ fill: "hsla(230,87%,9%,0.82)" }}
              >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
              </svg>
            </LinkSideBar>
          </div>

          <div className="border-t border-slate-500">
            <div className="px-2">
              <div className="py-4">
                <LinkSideBar to="addApp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                  </svg>

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-slate-700 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Add_App
                  </span>
                </LinkSideBar>
              </div>

              {/* <ul className="space-y-1 border-t border-slate-500 pt-4">
                <li>
                  <LinkSideBar
                    to="/"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Teams
                    </span>
                  </LinkSideBar>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Billing
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Invoices
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Account
                    </span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-slate-500 bg-white p-2">
          <button
            onClick={logoutFn}
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
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
              <line fill="#231f20" x1="144" x2="120" y1="144" y2="168" />
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

            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-slate-700 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </div>
      </div>
      <div className="px-4 py-4 max-w-5xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;
