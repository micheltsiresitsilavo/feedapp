import { useRef, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./allPlugins.js";

const EditorReadOnly = ({ data, holder }) => {
  const ejInstance = useRef();
  useEffect(() => {
    return () => {
      if (!ejInstance.current) {
        initEditor();
      }
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder,
      readOnly: true,
      data,
      onReady: () => {
        ejInstance.current = editor;
      },
      tools: EDITOR_JS_TOOLS,
    });
  };

  return (
    <>
      <div className=" " id={holder}></div>
    </>
  );
};
export default EditorReadOnly;
