import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <h1 className="flex items-center justify-center text-2xl font-bold">
        Error
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
