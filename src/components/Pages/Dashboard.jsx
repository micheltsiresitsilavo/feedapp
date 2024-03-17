import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" h-auto">
      <Outlet />
    </div>
  );
};

export default Dashboard;
