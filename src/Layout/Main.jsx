import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Dashboard from "../Layout/Dashboard";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
