import { useState, useCallback } from "react";

import toast, { Toaster } from "react-hot-toast";
import useGetOneApp from "../../../hooks/AppvoteHook/useGetOneApp.js";
import { Link, useParams } from "react-router-dom";
import pb from "../../../utils/pbClient.js";

import { useNavigate } from "react-router-dom";

const Editor = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;
  const [feedback, setFeedback] = useState("");

  // const ejInstance = useRef();
  const { appId } = useParams();
  const { data, isLoading } = useGetOneApp(appId);

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Thank's for your feedback", {
      duration: 4000,
      position: "bottom-center",
      // Custom Icon
      icon: "👏",
    });
  };
  const handleSubmit = async (e, message) => {
    e.preventDefault();
    const pyload = {
      appvoteId: appId,
      feedbacker: data?.expand.author.id,
      message,
    };
    await pb.collection("feedbacks").create(pyload);
    notify();
    navigate(-1);
  };

  return (
    <>
      <div className="py-4   max-w-3xl mx-auto px-4">
        <div className="py-2 flex items-center px-2 md:px-0 ">
          {isLoading ? (
            <div className="skeleton w-20 h-20"></div>
          ) : (
            <div className="pr-2">
              {data?.iconApp ? (
                <div className="">
                  <img
                    src={`${pbClientEnv}/api/files/${data?.collectionName}/${data?.id}/${data?.iconApp}`}
                    className="rounded-lg w-auto h-20"
                  />
                </div>
              ) : (
                <div className=" w-20 ">
                  <img
                    src={`https://ui-avatars.com/api/?name=${data?.name}&background=random`}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          )}
          <div className="space-y-5">
            <div>
              {isLoading ? (
                <p>
                  ... <span className="text-xs italic">by</span>
                </p>
              ) : (
                <p>
                  {data?.name} <span className="text-xs italic">by</span>
                </p>
              )}
            </div>
            <div className="flex  items-center gap-1">
              {isLoading ? (
                <>
                  <div className="skeleton w-8 h-8"></div>
                  <p>Michel</p>
                </>
              ) : (
                <>
                  {" "}
                  <div className="avatar">
                    {data?.expand.author.avatar ? (
                      <div className="w-8 rounded-full cursor-pointer">
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
                  <Link
                    to={`/profileme/${data?.expand.author.id}`}
                    className="text-xs link link-hover"
                  >
                    {data?.expand.author?.name} {data?.expand.author?.lastname}{" "}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e, feedback)} className=" ">
          <textarea
            placeholder="Your feedback"
            required
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            // value={feedback}
            onChange={(evt) => setFeedback(evt.target.value)}
          ></textarea>
          <div className="py-2 ">
            <button
              type="submit"
              className="btn btn-accent  btn-sm md:btn-lg w-full sm:w-auto"
              // onClick={() => handleSave()}
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6 w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m21.224 15.543-.813-1.464-1.748.972.812 1.461c.048.085.082.173.104.264a1.024 1.024 0 0 1-.014.5.988.988 0 0 1-.104.235 1 1 0 0 1-.347.352.978.978 0 0 1-.513.137H14v-2l-4 3 4 3v-2h4.601c.278 0 .552-.037.811-.109a2.948 2.948 0 0 0 1.319-.776c.178-.179.332-.38.456-.593a2.992 2.992 0 0 0 .336-2.215 3.163 3.163 0 0 0-.299-.764zM5.862 11.039l-2.31 4.62a3.06 3.06 0 0 0-.261.755 2.997 2.997 0 0 0 .851 2.735c.178.174.376.326.595.453A3.022 3.022 0 0 0 6.236 20H8v-2H6.236a1.016 1.016 0 0 1-.5-.13.974.974 0 0 1-.353-.349 1 1 0 0 1-.149-.468.933.933 0 0 1 .018-.245c.018-.087.048-.173.089-.256l2.256-4.512 1.599.923L8.598 8 4 9.964l1.862 1.075zm12.736 1.925L19.196 8l-1.638.945-2.843-5.117a2.95 2.95 0 0 0-1.913-1.459 3.227 3.227 0 0 0-.772-.083 3.003 3.003 0 0 0-1.498.433A2.967 2.967 0 0 0 9.41 3.944l-.732 1.464 1.789.895.732-1.465c.045-.09.101-.171.166-.242a.933.933 0 0 1 .443-.27 1.053 1.053 0 0 1 .53-.011.963.963 0 0 1 .63.485l2.858 5.146L14 11l4.598 1.964z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};
export default Editor;
