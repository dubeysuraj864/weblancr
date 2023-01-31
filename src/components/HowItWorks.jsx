function HowItWorks() {
  function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>
      <div className="HowItWorks flex flex-col md:flex-row md:items-center md:justify-center  p-4">
        <div className="left w-[100%] md:w-[50%] py-6 flex justify-center">
          <div>
            <div className="text-3xl font-bold">How It Works</div>
            <div>
              <p className="md:w-[430px] my-2  leading-6 font-light">
                Use this section to describe your company and the products you
                offer. You could share your company’s story and details about
                why you are in business.
              </p>
            </div>
            <div className="w-[50px] h-[50px] bg-slate-200 my-5 rounded-full"></div>
            <div>
              <img
                className=" w-[100%] h-[40vh] md:w-[300px] md:h-[200px] my-2 object-cover rounded-t-3xl"
                src="https://images.unsplash.com/photo-1642647516173-ca11494b90d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2180&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right text-center md:text-start w-[100%] md:w-[50%] py-6 flex flex-col justify-center">
      <div className="flex justify-center items-center">
      <div>
            <div className="flex justify-center md:justify-start">
              <img
                className="bg-[#3461FF] p-3 rounded-lg w-[50px] h-[50px] object-contain"
                src={images["ideation.png"]}
                alt=""
              />
            </div>
            <div className="my-3 text-2xl">Ideation</div>
            <div className="text-sm font-light mr-4">
              Use this section to describe your company and the products you
              offer. You could share your company’s
            </div>
          </div>
          <div>
            <div className="flex justify-center md:justify-start">
              <img
                className="bg-[#3461FF] p-3 rounded-lg  w-[50px] h-[50px] object-contain"
                src={images["budget.png"]}
                alt=""
              />
            </div>
            <div className="my-3 text-2xl">Ideation</div>
            <div className="text-sm font-light mr-4">
              Use this section to describe your company and the products you
              offer. You could share your company’s
            </div>
          </div>
          
      </div>
      <div className="flex py-8">
      <div>
            <div className="flex justify-center md:justify-start">
              <img
                className="bg-[#3461FF] p-3 rounded-lg  w-[50px] h-[50px] object-contain"
                src={images["performance.png"]}
                alt=""
              />
            </div>
            <div className="my-3 text-2xl">Ideation</div>
            <div className="text-sm font-light mr-4">
              Use this section to describe your company and the products you
              offer. You could share your company’s
            </div>
          </div>
          <div>
            <div className="flex justify-center md:justify-start">
              <img
                className="bg-[#3461FF] p-3 rounded-lg  w-[50px] h-[50px] object-contain"
                src={images["speed.png"]}
                alt=""
              />
            </div>
            <div className="my-3 text-2xl">Ideation</div>
            <div className="text-sm font-light mr-4">
              Use this section to describe your company and the products you
              offer. You could share your company’s
            </div>
          </div>
          
      </div>
      
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
