import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex items-center py-4 justify-between">
          <div className="left flex ">
            <div className="logo flex justify-start items-center">
              <img src={Logo} className="w-12 mr-2" alt="" />
              <span className="text-2xl font-bold">Weblancr</span>
            </div>
            <div className="nav-links flex items-center text-sm ml-4">
              <Link className="mx-4" to="/">How It Works</Link>
              <Link className="mx-4" to="/">Our Work</Link>
              <Link className="mx-4" to="/">Pricing</Link>
              <Link className="mx-4" to="/">About Us</Link>
            </div>
          </div>
          <div className="right"><button className="bg-[#3461FF] px-4 py-2 rounded-full text-white">Try It Now</button></div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
