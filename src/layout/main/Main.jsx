import { Outlet } from "react-router-dom";
import Footer from "../../component/main/footer/Footer";
import Navbar from "../../component/main/navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
};

export default Main;
