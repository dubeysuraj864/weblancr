import Banner from "../components/Banner";
import Commitment from "../components/Commitment";
import CTA from "../components/CTA";
import Help from "../components/Help";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Meet from "../components/Meet";
import OurWork from "../components/OurWork";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
// import Union from "../images/Union.png";

function Home() {
  return (
    <>
      <div>
        <Hero/>
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <Commitment />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <OurWork />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Meet />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <CTA />
      </div>
      <div>
        <Help />
      </div>
    </>
  );
}

export default Home;
