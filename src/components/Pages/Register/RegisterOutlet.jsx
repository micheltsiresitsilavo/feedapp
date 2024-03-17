import { Outlet } from "react-router-dom";
const RegisterOutlet = () => {
  return (
    <div className="hero min-h-screen bg-base-200 max-w-4xl mx-auto">
      <Outlet />
    </div>
  );
};

export default RegisterOutlet;
