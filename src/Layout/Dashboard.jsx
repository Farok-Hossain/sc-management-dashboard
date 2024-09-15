// import { GoBook } from "react-icons/go";
// import { IoManSharp, IoPeople, IoSettingsOutline } from "react-icons/io5";
// import { LiaPeopleCarrySolid } from "react-icons/lia";
// import { MdAccountBalanceWallet } from "react-icons/md";
// import { RiDashboard2Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" w-52 min-h-screen bg-blue-900">
        <ul className=" p-4 text-white ">
          <li>
            <h1>Dashoard</h1>
          </li>
          {/* <li>
            <Link to="/dashboard">
              <RiDashboard2Fill className="text-xl" />
              Dashboard
            </Link>
          </li>

          <li>
            <LiaPeopleCarrySolid className="text-xl" />
            Students
          </li>
          <li>
            <IoPeople className="text-xl" />
            Parents
          </li>
          <li>
            <IoManSharp className="text-xl" />
            Teachers
          </li>
          <li>
            <MdAccountBalanceWallet className="text-xl" />
            Account
          </li>
          <li>
            <GoBook className="text-xl" />
            Subject
          </li>
          <li>
            <IoSettingsOutline className="text-xl" />
            Settings
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
