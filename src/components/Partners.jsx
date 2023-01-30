function Partners() {
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
      <div className="partners p-2">
        <div className="top flex items-start ">
          <span className="text-4xl font-bold mr-8 ">
            Companies <br /> we Work with
          </span>
          <span className="leading-[26px] font-light">
            Use this section to describe your company and the <br /> products
            you offer. You could share your company’s <br /> story and details
            about why you are in business.{" "}
          </span>
        </div>
        <div className="bottom flex flex-col  items-start py-4">
          <div className="flex  items-start my-6">
            <img className="md:mr-16" src={images["spotify.png"]} alt="" />
            <img className="md:mr-16" src={images["google.png"]} alt="" />
            <img className="md:mr-16" src={images["uber.png"]} alt="" />
            <img className="md:mr-16" src={images["microsoft.png"]} alt="" />
            <img className="md:mr-16" src={images["shopify.png"]} alt="" />
          </div>
          <div className="flex  items-start py-4">
            <img className="md:mr-16" src={images["evernote.png"]} alt="" />
            <img className="md:mr-16" src={images["adobe.png"]} alt="" />
            <img className="md:mr-16" src={images["paypal.png"]} alt="" />
            <img className="md:mr-16" src={images["amazon.png"]} alt="" />
            <img className="md:mr-16" src={images["asana.png"]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
