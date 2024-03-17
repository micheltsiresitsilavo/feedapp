import pb from "../../../../utils/pbClient";
import Uppy from "@uppy/core";
import Resizer from "../../../../utils/Resizer";
import Webcam from "@uppy/webcam";
import { Dashboard, ProgressBar } from "@uppy/react";
import ImageEditor from "@uppy/image-editor";
import Compressor from "@uppy/compressor";
import Informer from "@uppy/informer";
import Str from "@supercharge/strings";
import { useSnapshot } from "valtio";
import { stateStore } from "../../../../store/valtioStore";
import { motion } from "framer-motion";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import "@uppy/image-editor/dist/style.min.css";
import "@uppy/progress-bar/dist/style.css";
import "@uppy/informer/dist/style.min.css";

import { useSWRConfig } from "swr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvatarHandler = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const { profileFromStore } = useSnapshot(stateStore);
  const { mutate } = useSWRConfig();

  const [loading, setLoading] = useState(false);

  const addAvatar = async (file) => {
    setLoading(true);
    const profiles = await pb.collection("suppervisors").getFullList();
    const res = profiles.find(
      (profile) => profile.auth === pb.authStore.model.id
    );
    let formData = new FormData();
    formData.append("avatar", file);

    await pb.collection("suppervisors").update(res.id, formData);
    mutate("setProfile");
    setLoading(false);
  };

  const deleteAvatar = async () => {
    const profiles = await pb.collection("suppervisors").getFullList();
    const res = profiles.find(
      (profile) => profile.auth === pb.authStore.model.id
    );

    await pb.collection("suppervisors").update(res.id, { avatar: "" });
    mutate("setProfile");
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      const fileType = Str(file.type).split("/");
      const compressFormat = fileType[1];

      Resizer.imageFileResizer(
        file,
        300,
        300,
        compressFormat,
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob"
      );
    });

  //Uppy
  const uppy = new Uppy({
    allowMultipleUploads: false,
    restrictions: {
      // maxFileSize: 50000000,
      allowedFileTypes: [".jpg", ".png", ".webp"],
    },
  })
    .use(Webcam)
    .use(Compressor, {
      id: "compressor",
      quality: 0.6,
    })
    .use(ImageEditor, {
      quality: 0.7,
    })
    .use(Informer, { id: "Informer" })
    .on("complete", async (result) => {
      const image = await resizeFile(result.successful[0].data);
      addAvatar(image);
    });

  const [widthDash, setWidthDash] = useState(600);

  useEffect(() => {
    const handleWindowResize = () => {
      let wSizeWin = window.innerWidth;
      if (wSizeWin <= 629) {
        setWidthDash(300);
      } else {
        setWidthDash(600);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-5xl mx-auto p-4 h-auto"
    >
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
        <div className="h-auto w-auto lg:w-64  py-2 px-4 rounded-lg ">
          {!loading ? (
            <div className="flex flex-col space-y-4 items-center">
              <div className="avatar  ">
                {profileFromStore?.avatar ? (
                  <div className=" w-24 md:w-40 mask mask-squircle  ">
                    <img
                      src={`${pbClientEnv}/api/files/${profileFromStore.collectionName}/${profileFromStore.id}/${profileFromStore.avatar}`}
                      className=" "
                    />
                  </div>
                ) : (
                  <div className="w-10 md:w-24 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img
                      src={`https://ui-avatars.com/api/?name=${profileFromStore?.name}+${profileFromStore?.lastname}&background=random`}
                    />
                  </div>
                )}
              </div>
              <div>
                {profileFromStore?.avatar && (
                  <div className="space-x-2">
                    <button
                      onClick={deleteAvatar}
                      className="bg-red-100 text-xs sm:text-sm text-red-500 px-2 py-2 rounded-md"
                    >
                      Delete Avatar
                    </button>
                    <Link
                      to="/profile"
                      className="bg-blue-100 text-xs sm:text-sm text-blue-500 px-2 py-[10px] rounded-md"
                    >
                      Go to Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          )}
        </div>
        <div className="flex justify-center h-auto col-span-2 ">
          <Dashboard
            uppy={uppy}
            plugins={["Webcam", "ImageEditor", "Compressor"]}
            width={widthDash} //600 629
            height={500}
            showProgressDetails={true}
            theme="auto"
          />
          <ProgressBar uppy={uppy} hideAfterFinish={false} />
          <div id="informer"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AvatarHandler;
