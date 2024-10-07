import { GoBook } from "react-icons/go";
import { IoManSharp, IoPeople, IoSettingsOutline } from "react-icons/io5";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdAccountBalanceWallet } from "react-icons/md";
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
        <Link>
          <LiaPeopleCarrySolid className="text-xl" />
          Students
        </Link>
        <Link>
          <IoPeople className="text-xl" />
          Parents
        </Link>
        <Link>
          <IoManSharp className="text-xl" />
          Teachers
        </Link>
        <Link>
          <MdAccountBalanceWallet className="text-xl" />
          Account
        </Link>
        <Link>
          <GoBook className="text-xl" />
          Subject
        </Link>
        <Link>
          <IoSettingsOutline className="text-xl" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
