import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center py-4 sm:px-20 rounded-full">
          <div className="left flex items-center">
            <div className="logo ">
             <Link to="/" className="flex justify-start items-center"> <img src={Logo} className="w-12 mr-2" alt="" />
              <span className="text-2xl font-bold">Weblancr</span></Link>
            </div>
            <div className="nav-links hidden md:flex items-center text-sm ml-4">
              <Link className="mx-4 hover:text-[#3461ff] transition-all" to="/">How It Works</Link>
              <Link className="mx-4 hover:text-[#3461ff] transition-all" to="/">Our Work</Link>
              <Link className="mx-4 hover:text-[#3461ff] transition-all" to="/">Pricing</Link>
              <Link className="mx-4 hover:text-[#3461ff] transition-all" to="/">About Us</Link>
            </div>
          </div>
          <div className="right"><button className="bg-[#3461FF] text-white hover:bg-[#E0FF22] hover:text-black transition-all px-4 py-2 rounded-full ">Try It Now</button></div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
