import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/dashboard/Dashboard";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
