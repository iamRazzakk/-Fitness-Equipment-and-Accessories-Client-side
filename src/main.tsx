import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routers.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="font-Lexend ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  </StrictMode>
);
