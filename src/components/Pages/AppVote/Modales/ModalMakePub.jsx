import { useRef } from "react";
import pb from "../../../../utils/pbClient";
import toast, { Toaster } from "react-hot-toast";
import { useSWRConfig } from "swr";
import localforage from "localforage";

const ModalMakePub = ({ appId, isPublish }) => {
  let modale = useRef();
  let boton = useRef();
  const { mutate } = useSWRConfig();

  const publishApp = async (appId) => {
    const refreshCache = async () => {
      await pb.collection("appvote").update(appId, { isPublish });
      const freshData = await pb.collection("appvote").getFullList({
        expand: "author",
      });
      await localforage.setItem("appData", freshData);
      mutate("appFilter");
    };

    toast.promise(refreshCache(), {
      loading: "Loading",
      success: () => {
        boton?.current.click();
        mutate("getListAppLog");

        return isPublish
          ? "App published successfuly!"
          : "App drafted successfuly";
      },
      error: isPublish ? "Error when publishing" : "Error when drafting",
    });
  };

  return (
    <>
      <div className="" onClick={() => modale?.current.showModal()}>
        {!isPublish ? (
          <span
            className="tooltip tooltip-top tooltip-accent flex items-center py-1"
            data-tip="to Draft"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 hover:text-lime-400 cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"></path>
            </svg>
          </span>
        ) : (
          <span
            className="tooltip tooltip-top tooltip-accent flex items-center py-1"
            data-tip="to Publish"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 hover:text-lime-400 cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM14 14v3h-4v-3H7l5-5 5 5h-3z"></path>
            </svg>
          </span>
        )}
      </div>
      <dialog
        id="my_modal_5"
        ref={modale}
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-accent absolute right-2 top-2"
              id="close"
              ref={boton}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-warning">
            {isPublish ? "Publish this app" : "Make  draft"}
          </h3>
          <p className="py-4">
            {isPublish
              ? "Are you sure to publish this app?"
              : "Are you want to draft this app?"}
          </p>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button
              className="btn btn-warning"
              onClick={() => publishApp(appId)}
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
      <Toaster />
    </>
  );
};

export default ModalMakePub;
