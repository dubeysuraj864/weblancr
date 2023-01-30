function HowItWorks() {
  function importAll(r) {
    let images = {};
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
      <div className="HowItWorks flex p-4">
        <div className="left md:w-[50vw] py-6">
          <div>
            <div className="text-3xl font-bold">How It Works</div>
            <div>
              <p className="md:w-2/3 my-2 leading-6 font-light">
                Use this section to describe your company and the products you
                offer. You could share your company’s story and details about
                why you are in business.
              </p>
            </div>
            <div className="w-[50px] h-[50px] bg-slate-200 my-5 rounded-full"></div>
            <div>
              <img
                className="w-[26vw] h-[30vh] my-2 object-cover rounded-t-3xl"
                src="https://images.unsplash.com/photo-1642647516173-ca11494b90d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2180&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right w-[50vw] py-6">
      <div className="flex">
      <div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
