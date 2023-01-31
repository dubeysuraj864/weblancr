function Help() {
  return (
    <>
      <div className="help my-10 flex justify-center">
        <div className="left m-6 w-[50vw]">
          <hr />
          <div className="my-6 flex justify-between">
            <span className="text-lg font-light">How do i sign up for the project?</span>
            <span  className="w-[30px] h-[30px] bg-[#3461FF] rounded-full"></span>
          </div>
          <hr />
          <div className="my-6 flex justify-between">
            <span className="text-lg font-light">What thing that i should prepare before starting?</span>
            <span className="w-[30px] h-[30px] bg-[#3461FF] rounded-full"></span>
          </div>
          <hr />
          <div className="my-6 flex justify-between">
            <span className="text-lg font-light">Does my company need help for marketing advices?</span>
            <span className="w-[30px] h-[30px] rounded-full bg-[#3461FF]"></span>
          </div>
          <hr />
        </div>

        <div className="right m-6 w-[50vw]">
            <div className="text-2xl font-bold ">How we can help you?</div>
            <div className="my-5 leading-6 font-light">Follow our newsletter. We will regulary update  our latest project <br /> and availability.</div>
            <div className=" ">
            <input type="email" className="bg-[#FAFAFA] w-[24vw] px-4 py-4 rounded-full mr-2" placeholder="Enter Your Email" />
            <button className="bg-[#3461FF] p-3 text-white rounded-full px-4">Let's Talk</button>
          </div>
          <div className="mt-6">
            <button className="underline text-[#3461FF] font-bold">More FAQ</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
