import { useRef } from "react";

const ModalDescription = ({ nameApp, description, label }) => {
  let modale = useRef();

  return (
    <>
      <div
        className="flex justify-center py-1"
        onClick={() => modale?.current.showModal()}
      >
        <span className=" text-sm link link-hover  md:font-semibold font-bold ">
          {label}
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
            <button className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{nameApp}</h3>
          <p className="py-4">{description}</p>
        </div>
      </dialog>
    </>
  );
};

export default ModalDescription;
