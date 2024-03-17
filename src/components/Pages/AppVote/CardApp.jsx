import { Link } from "react-router-dom";
import ModalDescription from "./ModalDescription";
import { Toaster } from "react-hot-toast";
import ModalDeleteApp from "./Modales/ModalDeleteApp";
import ModalMakePub from "./Modales/ModalMakePub";
import { useSnapshot } from "valtio";
import { stateStore } from "../../../store/valtioStore";

const Badge = () => {
  return (
    <div className="bg-gray-800/80 absolute top-0 px-2 py-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-8 md:h-8 w-5 h-5 font-bold"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
      </svg>
    </div>
  );
};

const BadgePub = () => {
  return (
    <div className="bg-gray-800/80 absolute top-0 px-2 py-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-8 md:h-8 w-5 h-5 font-bold"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9zm-3.79 8.37h-.06c-.69.37-3.55-.57-6.79-3.81-.34-.34-.66-.67-.95-1-.1-.11-.19-.23-.29-.35l-.53-.64-.28-.39c-.14-.19-.28-.38-.4-.56s-.16-.26-.24-.39-.22-.34-.31-.51-.13-.24-.19-.37-.17-.28-.23-.42-.09-.23-.14-.34-.11-.27-.15-.4S8.6 6 8.58 5.9s-.06-.24-.08-.34a2 2 0 0 1 0-.24 1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37a13.83 13.83 0 0 1 2.49 1.54A4.17 4.17 0 0 1 12 7v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7zM4.4 11l-2.23 6.7A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11z"></path>
      </svg>
    </div>
  );
};
const CardApp = ({ data, votes }) => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const voteFilterTrue = () => {
    const voteById = votes?.filter((item) => item.appvoteId === data?.id);
    return voteById?.filter((item) => item.vote === true);
  };

  const { profileFromStore } = useSnapshot(stateStore);
  let userId = profileFromStore?.id;

  return (
    <>
      <div className=" overflow-hidden bg-gray-700 text-slate-100 w-full sm:w-56  md:w-56 px-1 pb-2 pt-4 rounded-md shadow-lg ">
        <div className=" relative">
          <div className="flex justify-center  ">
            <div>
              {data?.iconApp ? (
                <div className="rounded-lg">
                  <img
                    src={`${pbClientEnv}/api/files/${data?.collectionName}/${data?.id}/${data?.iconApp}`}
                    className="w-22 h-20 rounded-lg"
                  />
                </div>
              ) : (
                <div className="avatar">
                  <div className="w-22 h-20  rounded-full ">
                    <img
                      src={`https://ui-avatars.com/api/?name=${data?.name}&background=random`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center py-1">
            <Link
              to={`/appvote/${data?.id}`}
              className=" text-md link link-hover md:text-lg md:font-semibold font-bold "
            >
              {data?.name}
            </Link>
          </div>
          {data?.expand.author?.id === userId ? (
            data?.isPublish ? (
              <BadgePub />
            ) : (
              <Badge />
            )
          ) : (
            ""
          )}
        </div>
        <div className="px-3 pt-2 mb-2 space-y-2 md:font-semibold font-bold text-xs md:text-sm ">
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

          {data?.linkCode ? (
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#ffff" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          ) : (
            <div className="flex justify-center invisible items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#ffff" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              <a className="link link-hover">http://app.com</a>
            </div>
          )}
        </div>
        <ModalDescription
          nameApp={data?.name}
          description={data?.description}
          label="Description"
        />
        <div className="flex justify-center px-2 items-center relative">
          <div className="stat bg-gray-800 text-slate-200 rounded-md shadow-md ">
            <div className="stat-title">Total likes</div>
            <div className="stat-value text-lime-500 text-2xl">
              {voteFilterTrue() ? `+${voteFilterTrue().length}` : "..."}
            </div>
            {data?.expand.author?.id === userId ? (
              <div className="bg-gray-900/80  w-24 h-10 absolute right-3 bottom-1  rounded-md flex items-center justify-around">
                <div className="px-2">
                  <ModalDeleteApp appId={data?.id} />
                </div>
                <div>
                  {data?.isPublish ? (
                    <ModalMakePub appId={data?.id} isPublish={false} />
                  ) : (
                    <ModalMakePub appId={data?.id} isPublish={true} />
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardApp;
