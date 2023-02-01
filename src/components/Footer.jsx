/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../images/logo.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
function Footer() {
  return (
    <>
      <div className="footer text-black flex flex-col md:flex-row justify-around p-8 bg-[#FAFAFA]">
        <div className="left">
          <div className="logo flex justify-start items-center">
            <img src={Logo} className="w-12 mr-2" alt="" />
            <span className="text-2xl font-bold">Weblancr</span>
          </div>
          <div className="my-2">West Delhi, India</div>
          <div className="flex">
            <a href="https://www.instagram.com/weblancr/" target="blank">
              <img className="w-[30px] my-2 mr-2" src={instagram} alt="" />
            </a>
            <a href="https://twitter.com/dubeysuraj864" target="blank">
              <img className="w-[30px] my-2 mr-2" src={twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100089638786484" target="blank">
              <img className="w-[30px] my-2 mr-2" src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/suraj-dubey-584a61246/" target="blank">
              <img className="w-[30px] my-2 mr-2" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/dubeysuraj864" target="blank">
              <img className="w-[30px] my-2 mr-2" src={github} alt="" />
            </a>
          </div>
          <div className="my-2">
            {" "}
            <button className="bg-[#3461FF] p-3 text-white rounded-full px-4">
              Contact Us
            </button>
          </div>
        </div>
        <div className="right flex text-sm my-4">
          <div className="mx-2 md:mx-4">
            <ul className=" leading-10">
              <li>Work With Us</li>
              <li>Advertise With Us</li>
              <li>Support Us</li>
              <li>Business Advices</li>
            </ul>
          </div>
          <div className="mx-2 md:mx-4">
            <ul className=" leading-10">
              <li>Private Coaching</li>
              <li>Our Work</li>
              <li>Our Commitment</li>
              <li>Our Team</li>
            </ul>
          </div>
          <div className="mx-2 md:mx-4">
            <ul className=" leading-10">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Report a Bug</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
