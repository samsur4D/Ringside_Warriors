import { Outlet } from "react-router-dom";
import Navber from "../Home/Navber";
import Footer from "../Home/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navber></Navber>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
   {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
