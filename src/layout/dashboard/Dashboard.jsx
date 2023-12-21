import { useEffect, useState } from "react";
import Navbar from "../../component/dashboard/Navbar";
import Sidebar from "../../component/dashboard/Sidebar";
import { useAuth } from "../../lib/middleware/useAuth";
import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useCheckNewUser } from "../../lib/middleware/useCheckNewUser";
import axios from "axios";
const Dashboard = () => {
  const navigate = useNavigate();
  const [webAdmin, setWebAdmin] = useState("");
  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);
  useEffect(() => {
    const checkNewUser = async () => {
      const { isNewUser } = await useCheckNewUser();
      if (isNewUser) {
        navigate("/firstform");
      }
      getWebAdmin();
    };
    checkNewUser();
  }, [navigate]);

  const getWebAdmin = async () => {
    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${
      import.meta.env.VITE_API_URL
    }/protected/takmir/webadmin`;
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        Authorization: `${token}`,
      },
    });
    setWebAdmin(response.data);
  };

  return (
    <>
      <Navbar takmir={webAdmin?.takmir} />
      <div style={{ minHeight: "100vh", display: "flex" }}>
        <Sidebar takmir={webAdmin?.takmir} mosque={webAdmin?.mosque} />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
