function Partners() {
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
      <div className="partners p-10 bg-white text-black" >
        <div className="top flex flex-col md:justify-center items-center text-center">
          <span className="text-4xl font-bold pl-4 mr-8 leading-[46px]">
            Companies We Work with
          </span>
          <span className="leading-[26px] font-light mt-4 text-justify">
            Use this section to describe your company and the <br className="hidden md:block" /> products
            you offer. You could share your company’s <br className="hidden md:block" /> story and details
            about why you are in business.{" "}
          </span>
        </div>
        <div className="bottom flex flex-col justify-between items-center py-4">
          <div className="flex flex-wrap justify-between items-center my-6">
            <img className="mx-4 my-6 w-[100px]" src={images["spotify.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["google.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["uber.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["microsoft.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["shopify.png"]} alt="" />
          </div>
          <div className="flex flex-wrap justify-between items-center ">
            <img className="mx-4 my-6 w-[100px]" src={images["evernote.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["adobe.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["paypal.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["amazon.png"]} alt="" />
            <img className="mx-4 my-6 w-[100px]" src={images["asana.png"]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
