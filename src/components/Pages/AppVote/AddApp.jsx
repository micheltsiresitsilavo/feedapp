import useAddAppvote from "../../../hooks/AppvoteHook/useAddAppvote";
import useFormAppvote from "../../../hooks/AppvoteHook/useFormAppvote.Js";
import { ClassicSpinner } from "react-spinners-kit";

import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import useFilter from "../../../hooks/AppvoteHook/useFilterName";
import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import CheckName from "./CheckName";
import { motion } from "framer-motion";
const AddApp = () => {
  const { register, handleSubmit, errors, reset } = useFormAppvote();
  const { mutate: addAppvoteFn, isLoading } = useAddAppvote();

  const [nameApp, setName] = useState("");

  const { data } = useFilter(nameApp.toLowerCase());

  const filteredName = data?.res;
  const { mutate } = useSWRConfig();
  useEffect(() => {
    mutate("appFilter");
  }, [nameApp]);

  const notify = () =>
    toast.success("Tafidra tsara ny app-nao", {
      duration: 4000,
      position: "bottom-center",
      // Custom Icon
      icon: "👏",
    });

  const handleAddAppvote = async (data) => {
    const dataToAdd = {
      name: data.name,
      linkDeploy: data.linkDeploy,
      linkCode: data.linkCode,
      description: data.description,
    };
    addAppvoteFn(dataToAdd);

    notify();
    reset();
  };

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      className="flex flex-col w-full "
    >
      <h2 className="text-xl font-semibold text-center "> Add your app</h2>

      <div className="divider"></div>
      <form
        onSubmit={handleSubmit(handleAddAppvote)}
        className="py-3 space-y-4 "
      >
        <div className="w-auto">
          <label className="px-2 py-1">App Name</label>
          <input
            type="text"
            placeholder="Type here"
            name="name"
            className={clsx(
              "input input-bordered input-accent w-full ",
              errors.name?.message && "input-error"
            )}
            {...register("name")}
            onChange={(evt) => setName(evt.target.value)}
          />
          <CheckName filteredName={filteredName} nameApp={nameApp} />
          <label className="label">
            <span className="label-text-alt text-red-400">
              {errors.name?.message}
            </span>
          </label>
        </div>
        <div className="">
          <label className="px-2 py-1">Link Deploy</label>
          <input
            type="link"
            placeholder="Type here"
            name="linkDeploy"
            className={clsx(
              "input input-bordered input-accent w-full",
              errors.linkDeploy?.message && "input-error"
            )}
            {...register("linkDeploy")}
          />
          <label className="label">
            <span className="label-text-alt text-red-400">
              {errors.linkDeploy?.message}
            </span>
          </label>
        </div>
        <div className="">
          <label className="px-2 py-1">Link Repository</label>
          <input
            type="text"
            placeholder="Type here"
            name="linkCode"
            className={clsx(
              "input input-bordered input-accent   w-full",
              errors.linkCode?.message && "input-error"
            )}
            {...register("linkCode")}
          />
          <label className="label">
            <span className="label-text-alt text-red-400">
              {errors.linkCode?.message}
            </span>
          </label>
        </div>
        <div>
          <textarea
            placeholder="Description"
            name="description"
            className={clsx(
              "textarea textarea-bordered   textarea-sm lg:textarea-lg w-full",
              errors.description?.message && "textarea-error",
              !errors.description?.message && "textarea-accent"
            )}
            {...register("description")}
          ></textarea>
          <label className="label">
            <span className="label-text-alt text-red-400">
              {errors.description?.message}
            </span>
          </label>
        </div>

        <button type="submit" className="btn  btn-accent w-full">
          <ClassicSpinner size={15} color="#dbeafe" loading={isLoading} /> Add
        </button>
      </form>
      <Toaster />
    </motion.div>
  );
};
export default AddApp;
