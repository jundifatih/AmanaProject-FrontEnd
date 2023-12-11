import { useEffect } from "react";
import Navbar from "../../component/dashboard/Navbar";
import Sidebar from "../../component/dashboard/Sidebar";
import { useAuth } from "../../lib/middleware/useAuth";
import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

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
