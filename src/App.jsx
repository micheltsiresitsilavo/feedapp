import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffectOnce } from "usehooks-ts";
import pb from "./utils/pbClient";
import { Theme } from "react-daisyui";
import { stateStore } from "./store/valtioStore";

import path from "./utils/path";

const router = createBrowserRouter(path);

function App() {
  useEffectOnce(() => {
    pb.authStore.onChange((token, model) => {
      stateStore.token = token;
      stateStore.user = model;
      console.log("call", token);
    });
  });

  return (
    <Theme dataTheme="dark ">
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
