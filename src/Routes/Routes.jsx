import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
