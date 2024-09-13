import { RiDashboard2Fill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div>
      <div className=" w-52 min-h-screen bg-blue-900">
        <ul className=" p-4 text-white ">
          <li>
            <RiDashboard2Fill />
            Dashboard
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Students
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Parents
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Teachers
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Account
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Subject
          </li>
          <li>
            <RiDashboard2Fill className="text-pink-500" />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
