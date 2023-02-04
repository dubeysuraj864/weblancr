import TestCard from "./TestCard";

function Testimonials() {
    const scrollLeft= ()=> {
        document.getElementById("testimonial").scrollLeft -= 300;
    }
    const scrollRight= ()=> {
        document.getElementById("testimonial").scrollLeft += 300;
    }
   
  return (
    <>
      <div className="testimonials my-16 ">
        <div className="top flex justify-between items-start p-2 sm:px-6 lg:px-28">
          <div className="left flex flex-col ">
            <span className=" text-lg md:text-2xl font-bold">What Our Client Said about us</span>
            <span className="my-2">Use this section to describe your company </span>
          </div>
          <div className="right flex">
            <div onClick={scrollLeft} className="w-[40px] h-[40px] hover:bg-blue-600 transition-all cursor-pointer bg-slate-300 rounded-full m-1"></div>
            <div onClick={scrollRight} className="w-[40px] h-[40px] hover:bg-blue-600 transition-all cursor-pointer bg-slate-300 rounded-full m-1"></div>
          </div>
        </div>
        <div id="testimonial" className="bottom flex overflow-auto scroll-smooth my-6 p-2 sm:px-6 lg:px-24">
            <div>
                <TestCard/>
            </div>
            <div>
                <TestCard/>
            </div>
            <div>
                <TestCard/>
            </div>
            <div>
                <TestCard/>
            </div>
            <div>
                <TestCard/>
            </div>
            <div>
                <TestCard/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
