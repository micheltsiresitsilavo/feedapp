import pb from "../../utils/pbClient";
import Str from "@supercharge/strings";
import Resizer from "react-image-file-resizer";

const UpdateIconApp = async (appId, fileFromResizer) => {
  let formData = new FormData();
  formData.append("iconApp", fileFromResizer);
  await pb.collection("appvote").update(appId, formData);
};

const DeleteIconApp = async (appId) => {
  await pb.collection("appvote").update(appId, { iconApp: "" });
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

export { UpdateIconApp, DeleteIconApp, resizeFile };
