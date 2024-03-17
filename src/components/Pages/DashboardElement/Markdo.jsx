import "@mdxeditor/editor/style.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  InsertAdmonition,
  InsertImage,
  InsertThematicBreak,
  Separator,
  directivesPlugin,
  headingsPlugin,
  tablePlugin,
} from "@mdxeditor/editor";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { quotePlugin } from "@mdxeditor/editor/plugins/quote";
import {
  imagePlugin,
  linkDialogPlugin,
  codeBlockPlugin,
  sandpackPlugin,
  codeMirrorPlugin,
} from "@mdxeditor/editor";
import { linkPlugin } from "@mdxeditor/editor/plugins/link";
import { thematicBreakPlugin } from "@mdxeditor/editor/plugins/thematic-break";
import {
  CreateLink,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  ShowSandpackInfo,
  InsertCodeBlock,
  InsertSandpack,
  ListsToggle,
  InsertTable,
} from "@mdxeditor/editor";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

// const admonitionMarkdown = `

// :::note
// foo
// :::

// :::tip
// Some **content** with _Markdown_ syntax. Check [this component](https://virtuoso.dev/).
// :::

// :::info
// Some **content** with _Markdown_ syntax.
// :::

// :::caution
// Some **content** with _Markdown_ syntax.
// :::

// :::danger
// Some **content** with _Markdown_ syntax.
// :::
// `
const Markdo = () => {
  return (
    <div className="max-w-4xl bg-slate-600 mx-auto  rounded-md my-8">
      <MDXEditor
        markdown={"#Hello"}
        className="bg-white text-gray-800 prose rounded-md max-w-4xl px-4"
        plugins={[
          imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve("https://picsum.photos/200/300");
            },
            imageAutocompleteSuggestions: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200",
            ],
          }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),

          linkPlugin(),
          linkDialogPlugin(),
          thematicBreakPlugin(),
          quotePlugin(),
          listsPlugin(),
          headingsPlugin(),
          tablePlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
          codeMirrorPlugin({
            codeBlockLanguages: { js: "JavaScript", css: "CSS" },
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <BlockTypeSelect />
                <Separator />
                <InsertTable />
                <InsertImage />
                <CreateLink />
                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                    {
                      when: (editor) => editor?.editorType === "sandpack",
                      contents: () => <ShowSandpackInfo />,
                    },
                    {
                      fallback: () => (
                        <>
                          <InsertCodeBlock />
                          <InsertSandpack />
                        </>
                      ),
                    },
                  ]}
                />
                <InsertAdmonition />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
};

export default Markdo;
