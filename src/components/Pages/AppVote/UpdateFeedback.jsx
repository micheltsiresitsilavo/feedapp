import { useRef, useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./allPlugins.js";
import toast, { Toaster } from "react-hot-toast";
import useGetOneApp from "../../../hooks/AppvoteHook/useGetOneApp.js";
import { Link, useParams } from "react-router-dom";
import pb from "../../../utils/pbClient.js";
import { uuidv4 } from "@mdxeditor/editor";

import { useNavigate } from "react-router-dom";
import useGetOneFeedback from "../../../hooks/AppvoteHook/useGetOneFeedback.js";

const UpdateFeedback = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const ejInstance = useRef();
  const { feedbackId } = useParams();
  const { data, isLoading } = useGetOneFeedback(feedbackId);
  const [loader, setLoader] = useState(uuidv4);
  const [message, setMessage] = useState(data?.message);

  console.log(data);
  useEffect(() => {
    if (data) {
      setMessage(data.message);
    }
    return () => {
      if (!ejInstance.current) {
        initEditor();
      }
      ejInstance.current = null;
    };
  }, [data]);

  const navigate = useNavigate();
  const initEditor = () => {
    const notify = () =>
      toast.success("Your editor is ready", {
        duration: 4000,
        position: "bottom-center",
        // Custom Icon
        icon: "👏",
      });

    // console.log(data.message);
    const editor = new EditorJS({
      holder: feedbackId,
      readOnly: false,
      data: message,
      onReady: () => {
        ejInstance.current = editor;
        notify();
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };
  const notify = () => {
    toast.success("Thank's for your feedback", {
      duration: 4000,
      position: "bottom-center",
      // Custom Icon
      icon: "👏",
    });
  };

  const saving = async () => {
    const cleanData = await ejInstance.current.save();
    const pyload = {
      message: cleanData,
    };

    await pb.collection("feedbacks").update(feedbackId, pyload);
    notify();
    navigate(-1);
  };

  return (
    <>
      <div className="py-4   max-w-3xl mx-auto ">
        <div className="py-2 flex items-center px-2 md:px-0 ">
          {isLoading ? (
            <div className="skeleton w-20 h-20"></div>
          ) : (
            <div className="pr-2">
              {data?.expand.appvoteId.iconApp ? (
                <div className="">
                  <img
                    src={`${pbClientEnv}/api/files/${data?.expand.appvoteId.collectionName}/${data?.expand.appvoteId.id}/${data?.expand.appvoteId.iconApp}`}
                    className="rounded-lg w-auto h-20"
                  />
                </div>
              ) : (
                <div className=" w-20 ">
                  <img
                    src={`https://ui-avatars.com/api/?name=${data?.expand.appvoteId.name}&background=random`}
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
                  {data?.expand.appvoteId.name}{" "}
                  <span className="text-xs italic">by</span>
                </p>
              )}
            </div>
            <div className="flex  items-center gap-1">
              {isLoading ? (
                <>
                  <div className="skeleton w-8 h-8"></div>
                  <p>...</p>
                </>
              ) : (
                <>
                  {" "}
                  <div className="avatar">
                    {data?.expand.feedbacker.avatar ? (
                      <div className="w-8 rounded-full cursor-pointer">
                        <img
                          src={`${pbClientEnv}/api/files/${data?.expand.feedbacker.collectionName}/${data?.expand.feedbacker.id}/${data?.expand.feedbacker.avatar}`}
                        />
                      </div>
                    ) : (
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={`https://ui-avatars.com/api/?name=${data?.expand.feedbacker?.name}+${data?.expand.feedbacker?.lastname}&background=random`}
                        />
                      </div>
                    )}
                  </div>
                  <Link
                    to={`/profileme/${data?.expand.feedbacker.id}`}
                    className="text-xs link link-hover"
                  >
                    {data?.expand.feedbacker?.name}{" "}
                    {data?.expand.feedbacker?.lastname}{" "}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div
            className=" bg-white  border-accent border-2 text-slate-800 prose  px-12  rounded-md "
            id={feedbackId}
          ></div>

          <div className="py-2 ">
            <button
              className="btn btn-accent  btn-sm md:btn-lg w-full sm:w-auto"
              onClick={() => saving()}
            >
              Update
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
        </div>
      </div>
      <Toaster />
    </>
  );
};
export default UpdateFeedback;
