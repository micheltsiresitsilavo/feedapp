import { useRef } from "react";
import pb from "../../../../utils/pbClient";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

const ModalConfirm = ({ feedbackId }) => {
  let modale = useRef();
  let boton = useRef();
  const { mutate } = useSWRConfig();

  const deleteFeedback = async (appId) => {
    // await pb.collection("feedbacks").delete(appId);

    toast.promise(pb.collection("feedbacks").delete(appId), {
      loading: "Loading",
      success: () => {
        boton?.current.click();
        mutate("getFeedback");

        return "Feedback deleted!";
      },
      error: "Error when deleting",
    });
  };

  return (
    <>
      <div className="" onClick={() => modale?.current.showModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:text-red-400 cursor-pointer"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
        </svg>
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
          <p className="py-4">Are you sure to delete this feedback?</p>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button
              className="btn btn-error"
              onClick={() => deleteFeedback(feedbackId)}
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalConfirm;
