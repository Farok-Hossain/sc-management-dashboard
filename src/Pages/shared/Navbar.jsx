import { RiDashboard2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col w-40 gap-5 text-white bg-blue-600">
      <h1>This is navbar</h1>
      <Link to="/dashboard" className="flex">
        <RiDashboard2Fill className="text-xl" />
        Dashboard
      </Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
