import { RiDashboard2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen w-40 gap-5 text-white bg-blue-600">
        <h1>This is navbar</h1>
        <Link to="/dashboard" className="flex">
          <RiDashboard2Fill className="text-xl" />
          Dashboard
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
