import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
