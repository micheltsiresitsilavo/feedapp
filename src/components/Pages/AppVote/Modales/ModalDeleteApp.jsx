import { useRef } from "react";
import pb from "../../../../utils/pbClient";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import localforage from "localforage";

const ModalDeleteApp = ({ appId }) => {
  let modale = useRef();
  let boton = useRef();
  const { mutate } = useSWRConfig();

  const deleteApp = async (appId) => {
    const refreshCache = async () => {
      await pb.collection("appvote").delete(appId);
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

        return "App deleted successfuly!";
      },
      error: () => {
        boton?.current.click();
        return "Error when deleting";
      },
    });
  };

  return (
    <>
      <div className="" onClick={() => modale?.current.showModal()}>
        <span
          className="tooltip tooltip-top tooltip-error flex items-center py-1"
          data-tip="Delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 hover:text-red-400 cursor-pointer"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
          </svg>
        </span>
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
          <h3 className="font-bold text-lg text-red-500">Delete</h3>
          <p className="py-4">Are you sure to delete this app?</p>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn btn-error" onClick={() => deleteApp(appId)}>
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalDeleteApp;
