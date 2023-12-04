import Navbar from "../../component/dashboard/Navbar";
import Sidebar from "../../component/dashboard/Sidebar";
import "./style.css";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
