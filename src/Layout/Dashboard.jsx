import { RiDashboard2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/home">
              <RiDashboard2Fill />
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
