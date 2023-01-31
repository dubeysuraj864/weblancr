function Hero() {
  return (
    <>
      <div className="home flex flex-col-reverse md:flex-row items-start my-12 md:my-6">
        <div className="left flex flex-col justify-center items-start  my-4 md:my-0 md:w-[50%] md:pl-[6%] bg">
   
            <div className="title text-6xl p-2 font-bold leading-[80px] md:leading-[90px] ">
              We Take <br className=" hidden md:block" />
              Care Of <br className=" hidden md:block" />
              Your Brand
            </div>
            <div className="para font-light text-gray-500 my-4 leading-[30px] md:leading-[30px] p-2 sm:w-[100%] md:w-[70%]">
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.
            </div>
            <div className=" ">
              <input
                type="email"
                className="bg-[#000] border border-white px-4 py-3 rounded-full mr-2"
                placeholder="Enter Your Email"
              />
              <button className="bg-[#3461FF] p-3 text-white rounded-full px-4">
                Let's Talk
              </button>
            </div>
        </div>
        <div className="right flex flex-col ">
          <div className="top relative flex justify-center items-start">
            <img
              className="w-80 h-44 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1589424987100-72303ec43d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
              alt=""
            />
            {/*  */}
            {/* <div className="absolute right-[16vw] -top-12">
              <img src={Union} className="w-32" alt="" />
              <span className="absolute top-[30%] left-[35%] text-4xl">😍</span>
            </div> */}
            {/*  */}
            <img
              className="w-44 h-44 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
          <div className="middle  flex justify-center items-start">
            <div className="2 relative w-44 h-44 object-cover rounded-full bg-[#3461FF]">
              <span className="absolute text-6xl top-[33%] left-[33%]">✏️</span>
            </div>
            <img
              className="w-80 h-44 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div className="3"></div>
          </div>
          <div className="bottom relative flex justify-center items-start">
            {/*  */}
            {/* <div className="absolute right-[23vw] -top-12">
              <img src={Union} className="w-28 scale-x-[-1] z-10" alt="" />
              <span className="absolute top-[25%] left-[30%] text-4xl">🤌</span>
            </div> */}
            {/*  */}
            <img
              className="w-44 h-44 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
            <div className="5 -z-10 relative w-36 h-44 object-cover rounded-full bg-[#F1F4FF]">
              <span className="absolute  text-6xl top-[33%] left-[28%]">
                🧑🏻‍💻
              </span>
            </div>
            <div className="6 relative w-36 h-44 object-cover rounded-full bg-[#E0FF22]">
              <span className="absolute text-6xl top-[33%] left-[30%]">👑</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
