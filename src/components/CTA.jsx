import CTA1 from "../images/cta1.png";
import CTA2 from "../images/cta2.png";

function CTA() {
  return (
    <>
      <div className="cta m-auto rounded-3xl flex flex-col md:flex-row md:justify-around items-center justify-center bg-[#232038] w-4/5 md:w-4/5 my-10 text-white p-8">
        <div className="left flex flex-col items-center">
          <div className="text-4xl md:my-8 text-center">
            Start Your Journey <br /> With Us Now
          </div>
          <div>
            <button className="bg-[#3461FF] text-white py-2 rounded-3xl px-4 mt-6 my-5">
              Start Now
            </button>
          </div>
        </div>
        <div className="right flex items-center bg-[#E0FF22] p-14 rounded-full justify-center">
          <img src={CTA1} className="w-10" alt="" />
          <img src={CTA2} className="w-16" alt="" />
        </div>
      </div>
    </>
  );
}

export default CTA;
