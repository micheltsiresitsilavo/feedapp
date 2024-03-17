import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import { ClassicSpinner } from "react-spinners-kit";
import useFormAppvote from "../../../hooks/AppvoteHook/useFormAppvote.Js";
import useFilter from "../../../hooks/AppvoteHook/useFilterName";
import useGetOneApp from "../../../hooks/AppvoteHook/useGetOneApp";
import useUpdateApp from "../../../hooks/AppvoteHook/useUpdateApp";
import useFormIcon from "../../../hooks/AppvoteHook/useFormIcon";
import {
  DeleteIconApp,
  UpdateIconApp,
  resizeFile,
} from "../../../hooks/AppvoteHook/useUpdateIconApp";
import { useSWRConfig } from "swr";
import CheckNameAdd from "./CheckNameAdd";

const UpdateApp = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const { register, handleSubmit, errors } = useFormAppvote();
  const { register: take, handleSubmit: action, reset } = useFormIcon();

  const { appId } = useParams();
  const { data: appvote } = useGetOneApp(appId);
  const { mutate: updateApp, isLoading, error } = useUpdateApp(appId);

  const { mutate } = useSWRConfig();
  //States
  const [name, setName] = useState(appvote?.name);
  const [linkDeploy, setLinkDeploy] = useState(appvote?.linkDeploy);
  const [linkCode, setLinkCode] = useState(appvote?.linkCode);
  const [description, setDescription] = useState(appvote?.description);
  const { data } = useFilter(name?.toLowerCase());
  // const { data: fullLists } = useGetFullLists();

  const filteredName = data?.res;

  useEffect(() => {
    mutate("appFilter");
  }, [name]);

  const handleIconApp = async ({ iconapp }) => {
    const iconResized = await resizeFile(iconapp[0]);
    await UpdateIconApp(appId, iconResized);
    mutate("getOneApp");

    reset();
  };

  const handleUpdateAppvote = (data) => {
    const dataToUpdate = {
      name: data?.name,
      linkDeploy: data?.linkDeploy,
      linkCode: data?.linkCode,
      description: data?.description,
    };
    updateApp(dataToUpdate);
  };

  const handleDeleteIcon = async () => {
    await DeleteIconApp(appId);
    mutate("getOneApp");
  };

  return (
    <div className="flex flex-col w-full ">
      <h2 className="text-xl font-semibold text-center "> Update your app</h2>
      <div className="divider"></div>
      {error ? (
        <div className="bg-red-300 rounded-sm text-red-500 font-semibold px-2 text-center py-4">
          {error.message}
        </div>
      ) : (
        ""
      )}
      <div className="">
        <div className=" flex justify-center items-center py-2">
          {appvote?.iconApp ? (
            <div className="indicator ">
              <div className="lg:tooltip" data-tip="Delete">
                <button
                  onClick={() => handleDeleteIcon()}
                  className="indicator-item badge badge-accent mt-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 "
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffff" }}
                  >
                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                  </svg>
                </button>
              </div>
              <img
                src={`${pbClientEnv}/api/files/${appvote?.collectionName}/${appvote?.id}/${appvote?.iconApp}`}
                className="rounded-lg w-auto h-40"
              />
            </div>
          ) : (
            <div className="md:w-24 w-20 ">
              <img
                src={`https://ui-avatars.com/api/?name=${appvote?.name}&background=random`}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        <form
          onSubmit={action(handleIconApp)}
          className="flex-col md:flex gap-1 space-y-1"
          id="avatar"
        >
          <input
            type="file"
            name="iconapp"
            className={clsx(
              "file-input file-input-bordered input-accent w-full",
              errors.iconapp?.message && "file-input-error"
            )}
            {...take("iconapp")}
          />
          <button type="submit" className="btn w-full  btn-accent  ">
            <ClassicSpinner size={15} color="#dbeafe" loading={isLoading} />{" "}
            <span className="px-1">Update icon</span>
          </button>
        </form>
      </div>

      <form
        onSubmit={handleSubmit(handleUpdateAppvote)}
        className="py-3 space-y-4 "
      >
        <div className="w-auto">
          <label className="px-2 py-1">App Name</label>
          <input
            type="text"
            name="name"
            className={clsx(
              "input input-bordered input-accent w-full ",
              errors.name?.message && "input-error"
            )}
            {...register("name")}
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />

          <CheckNameAdd filteredName={filteredName} nameApp={name} />

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
            name="linkDeploy"
            value={linkDeploy}
            className={clsx(
              "input input-bordered input-accent w-full",
              errors.linkDeploy?.message && "input-error"
            )}
            {...register("linkDeploy")}
            onChange={(evt) => setLinkDeploy(evt.target.value)}
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
            name="linkCode"
            value={linkCode}
            className={clsx(
              "input input-bordered input-accent   w-full",
              errors.linkCode?.message && "input-error"
            )}
            {...register("linkCode")}
            onChange={(evt) => setLinkCode(evt.target.value)}
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
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          ></textarea>
          <label className="label">
            <span className="label-text-alt text-red-400">
              {errors.description?.message}
            </span>
          </label>
        </div>

        <button type="submit" className="btn   btn-accent w-full  space-x-2">
          <ClassicSpinner size={15} color="#dbeafe" loading={isLoading} />{" "}
          <span className="px-1">Update</span>
        </button>
      </form>
      <Toaster />
    </div>
  );
};
export default UpdateApp;
