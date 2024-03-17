import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./allPlugins";
const ReactEditorJS = createReactEditorJS();
const ReactEditor = ({ data }) => {
  return (
    <div>
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        readOnly={true}
        defaultValue={data}
      />
    </div>
  );
};

export default ReactEditor;
