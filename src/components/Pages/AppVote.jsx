import { Link } from "react-router-dom";
import useGetOneApp from "../../hooks/AppvoteHook/useGetOneApp";
import { useParams } from "react-router-dom";
import { useSnapshot } from "valtio";
import { stateStore } from "../../store/valtioStore";
import clsx from "clsx";
import useGetVoteStat from "../../hooks/AppvoteHook/useVoteStat";
import useCreateVote from "../../hooks/AppvoteHook/useCreateVote";
import { useEffect, useState } from "react";
import WhoVote from "./AppVote/WhoVote";
import { Toaster } from "react-hot-toast";
import useGetFeedback from "../../hooks/AppvoteHook/useGetFeedback";
import ModalConfirm from "./AppVote/Modales/ModalConfirm";
import { ClassicSpinner } from "react-spinners-kit";
// import ReactEditor from "./AppVote/ReactEditor";

const AppVote = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;
  const { appId } = useParams();
  const { data, isLoading } = useGetOneApp(appId);
  const { data: feedbacks, isLoading: load } = useGetFeedback(appId);
  const { data: vote, isLoading: loadingVote } = useGetVoteStat(appId);
  const { profileFromStore } = useSnapshot(stateStore);
  const { mutate: addVote } = useCreateVote();

  const [isVote, setIsVote] = useState(false);

  const { user } = useSnapshot(stateStore);

  const handleCreateVote = (appvoteId) => {
    addVote(appvoteId);
  };

  const checkIsVote = async (param) => {
    const findVoter = param?.find(
      (item) => item.voterId === profileFromStore?.id
    );
    if (!findVoter) {
      setIsVote(false);
    } else {
      setIsVote(true);
    }
  };
  useEffect(() => {
    checkIsVote(vote);
  }, [vote]);

  return (
    <div className="h-auto">
      <div className="bg-[url('./image/Hexagon.svg')]">
        <div
          className={clsx(
            "navbar bg-base-100",
            data?.author === profileFromStore?.id && "hidden"
          )}
        >
          <div className="flex md:justify-start justify-center  w-full bg-gray-800/80 py-1">
            <Link
              to={`/profileme/${data?.expand.author.id}`}
              className="px-3 link link-hover "
            >
              {data?.expand.author.name} {data?.expand.author.lastname}
            </Link>
            <div className="flex   ">
              <Link
                to={`/profileme/${data?.expand.author.id}`}
                className="dropdown dropdown-center"
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  {data?.expand.author.avatar ? (
                    <div className="w-12 rounded-full cursor-pointer bg-slate-300">
                      <img
                        src={`${pbClientEnv}/api/files/${data?.expand.author.collectionName}/${data?.expand.author.id}/${data?.expand.author.avatar}`}
                      />
                    </div>
                  ) : (
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${data?.expand.author?.name}+${data?.expand.author?.lastname}&background=random`}
                      />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px-4 overflow-hidden  bg-slate-700/30 text-slate-100  w-auto  py-4 shadow-lg flex justify-between flex-wrap items-center ">
            <div className="flex items-center px-2 mb-2">
              {isLoading ? (
                <div className="skeleton w-20 h-20"></div>
              ) : (
                <div className="">
                  {data?.iconApp ? (
                    <div className="w-auto">
                      <img
                        src={`${pbClientEnv}/api/files/${data?.collectionName}/${data?.id}/${data?.iconApp}`}
                        className="rounded-lg w-auto h-20"
                      />
                    </div>
                  ) : (
                    <div className="md:w-24 w-20 ">
                      <img
                        src={`https://ui-avatars.com/api/?name=${data?.name}&background=random`}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="flex-col justify-center py-1 px-4">
                <span className=" sm:visible text-sm   md:text-lg md:font-semibold font-bold ">
                  {isLoading ? (
                    <div className="skeleton h-3 w-40"></div>
                  ) : (
                    data?.name
                  )}
                </span>
                {data?.author === profileFromStore?.id &&
                  (isLoading ? (
                    ""
                  ) : (
                    <Link to={`/dash/updateApp/${appId}`}>
                      <div className="bg-accent text-slate-100 font-semibold text-center rounded-sm text-xs md:text-sm shadow-xl cursor-pointer">
                        Edit
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="px-3  mb-6 space-y-2 md:font-semibold font-bold text-xs md:text-sm ">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  style={{ fill: "#ffff" }}
                >
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
                <a
                  href={data?.linkDeploy}
                  target="_blank"
                  rel=" noreferrer"
                  className="link link-hover"
                >
                  {data?.linkDeploy}
                </a>
              </div>
              {data?.linkCode && (
                <div
                  className={clsx(
                    "flex justify-center items-center",
                    !data?.linkCode && "invisible"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffff" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                  <a
                    href={data?.linkCode}
                    target="_blank"
                    rel=" noreferrer"
                    className="link link-hover"
                  >
                    {data?.linkCode}
                  </a>
                </div>
              )}
            </div>
            <div className="">
              <div className="flex justify-end px-2 items-center py-2">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  {vote
                    ? vote?.slice(0, 3).map((avatar) =>
                        avatar?.expand?.voterId?.avatar ? (
                          <div key={avatar?.id} className="avatar bg-slate-300">
                            <div className="w-12">
                              <img
                                src={`${pbClientEnv}/api/files/${avatar?.expand?.voterId.collectionName}/${avatar?.expand?.voterId.id}/${avatar?.expand?.voterId.avatar}`}
                              />
                            </div>
                          </div>
                        ) : (
                          <div key={avatar?.id} className="avatar">
                            <div className="w-12">
                              <img
                                src={`https://ui-avatars.com/api/?name=${avatar?.expand?.voterId?.name}+${avatar?.expand?.voterId?.lastname}&background=random`}
                              />
                            </div>
                          </div>
                        )
                      )
                    : "Loading"}

                  <div className="avatar placeholder">
                    <div className="w-12 bg-secondary text-primary-content">
                      <span>+{vote?.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col max-w-4xl mx-auto">
          <div className="grid h-auto py-4 px-3 text-sm md:text-lg  place-items-center">
            {data?.description}
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  px-2 md:mt-8 my-2">
        <div className=" bg-gray-800  md:max-w-2xl w-full rounded-sm">
          <div className="bg-slate-600 text-lime-300  py-3 rounded-t-sm px-4  flex  items-center justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path>
              </svg>
              <p className="px-1">Who like</p>
            </div>
            <div className="indicator">
              {isVote && (
                <span className="indicator-item  badge-secondary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM6.435 8.467A1.49 1.49 0 0 1 8.502 8.4a1.49 1.49 0 0 1 2.065.033c.597.592.604 1.521.018 2.118l-2.05 2.083-2.082-2.05a1.484 1.484 0 0 1-.018-2.117zM12 18c-4 0-5-4-5-4h10s-1 4-5 4zm5.585-7.449-2.05 2.083-2.082-2.05a1.485 1.485 0 0 1-.019-2.117 1.49 1.49 0 0 1 2.068-.067 1.49 1.49 0 0 1 2.065.033c.597.591.605 1.521.018 2.118z"></path>
                  </svg>
                </span>
              )}
              {user ? (
                <button
                  className="btn  btn-accent  btn-sm lg:btn-md"
                  onClick={() => handleCreateVote(data?.id)}
                >
                  {isVote ? "dislike" : "like"}
                </button>
              ) : (
                <Link
                  to="/captifportal"
                  className="btn  btn-accent  btn-sm lg:btn-md"
                >
                  Like
                </Link>
              )}
            </div>
          </div>

          <div>
            {vote?.length === 0 ? (
              <div className="py-10">
                <Notific label="No vote yet" />
              </div>
            ) : (
              vote
                ?.slice(0, 6)
                .map((item) => (
                  <WhoVote key={item.id} data={item} loading={loadingVote} />
                ))
            )}
          </div>
        </div>
        <div className="bg-slate-500 w-auto col-span-2 rounded-sm">
          <div className="bg-slate-600 text-lime-300   rounded-t-sm px-4 py-3 flex  items-center justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m21.224 15.543-.813-1.464-1.748.972.812 1.461c.048.085.082.173.104.264a1.024 1.024 0 0 1-.014.5.988.988 0 0 1-.104.235 1 1 0 0 1-.347.352.978.978 0 0 1-.513.137H14v-2l-4 3 4 3v-2h4.601c.278 0 .552-.037.811-.109a2.948 2.948 0 0 0 1.319-.776c.178-.179.332-.38.456-.593a2.992 2.992 0 0 0 .336-2.215 3.163 3.163 0 0 0-.299-.764zM5.862 11.039l-2.31 4.62a3.06 3.06 0 0 0-.261.755 2.997 2.997 0 0 0 .851 2.735c.178.174.376.326.595.453A3.022 3.022 0 0 0 6.236 20H8v-2H6.236a1.016 1.016 0 0 1-.5-.13.974.974 0 0 1-.353-.349 1 1 0 0 1-.149-.468.933.933 0 0 1 .018-.245c.018-.087.048-.173.089-.256l2.256-4.512 1.599.923L8.598 8 4 9.964l1.862 1.075zm12.736 1.925L19.196 8l-1.638.945-2.843-5.117a2.95 2.95 0 0 0-1.913-1.459 3.227 3.227 0 0 0-.772-.083 3.003 3.003 0 0 0-1.498.433A2.967 2.967 0 0 0 9.41 3.944l-.732 1.464 1.789.895.732-1.465c.045-.09.101-.171.166-.242a.933.933 0 0 1 .443-.27 1.053 1.053 0 0 1 .53-.011.963.963 0 0 1 .63.485l2.858 5.146L14 11l4.598 1.964z"></path>
              </svg>
              <p className="px-1">Feedbacks</p>
            </div>
            <div>
              {user ? (
                <Link
                  to={`/feedback/${appId}`}
                  className="btn btn-accent btn-sm lg:btn-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                    <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                  </svg>
                  Write feeback
                </Link>
              ) : (
                <Link
                  to="/captifportal"
                  className="btn btn-accent btn-sm lg:btn-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                    <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                  </svg>
                  Write feeback
                </Link>
              )}
            </div>
          </div>
          <div className="py-10 px-4 space-y-12">
            {load ? (
              <div className="w-full  flex justify-center  items-center">
                <ClassicSpinner size={25} color="#dbeafe" loading={load} />
              </div>
            ) : feedbacks?.length === 0 ? (
              <Notific label="Not yet feedback. Feel free to add one" />
            ) : (
              feedbacks?.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-700 px-4 py-3 rounded-md max-w-2xl text-xs md:text-sm whitespace-none relative"
                >
                  <p className="p-4">{item.message}</p>
                  <div className="absolute flex space-x-1 text-slate-100 font-semibold items-center bg-gray-700 px-2 py-1 rounded-md -top-8 left-0">
                    {item?.expand.feedbacker?.avatar ? (
                      <div className="avatar">
                        <div className="w-10 rounded-full bg-slate-300">
                          <img
                            src={`${pbClientEnv}/api/files/${item?.expand.feedbacker.collectionName}/${item?.expand.feedbacker.id}/${item?.expand.feedbacker.avatar}`}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img
                            src={`https://ui-avatars.com/api/?name=${item?.expand.feedbacker?.name}+${item?.expand.voterId?.lastname}&background=random`}
                          />
                        </div>
                      </div>
                    )}
                    <p>
                      {item?.expand.feedbacker?.name}{" "}
                      {item?.expand.feedbacker?.lastname}
                    </p>
                  </div>
                  {user ? (
                    <div className="absolute right-0 -top-5 px-1 py-1 bg-gray-700 text-slate-100 rounded-sm flex ">
                      <div className="">
                        <ModalConfirm feedbackId={item.id} />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AppVote;

const Notific = ({ label, wid }) => {
  return (
    <div className="flex justify-center w-full px-2 ">
      <div className="stack w-96">
        <div className="text-center border border-base-content card w-full bg-gray-700">
          <div className="card-body">{label}</div>
        </div>
        <div className="text-center border border-base-content card w-full  bg-gray-700">
          <div className="card-body">B</div>
        </div>
        <div className="text-center border border-base-content card w-full   bg-gray-700">
          <div className="card-body">c</div>
        </div>
      </div>
    </div>
  );
};
