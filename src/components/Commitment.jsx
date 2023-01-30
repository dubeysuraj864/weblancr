function Commitment() {
  return (
    <>
      <div className="commitment flex p-2 my-10">
        <div className="left flex md:w-[50vw]">
          <div>
            <div className="flex flex-col mr-6 md:2/3 my-4">
              <span className="text-4xl font-medium">245%</span>
              <span className="w-4/5 text-xs font-light leading-4 mt-2">More revenues for the brand</span>
            </div>
            <div className="flex flex-col mr-6 md:2/3 my-4">
              <span className="text-4xl font-medium">130K+</span>
              <span className="w-4/5 text-xs font-light leading-4 mt-2">Audiences reached across platfrom</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col mr-6 md:2/3 my-4">
              <span className="text-4xl font-medium">50+</span>
              <span className="w-4/5 text-xs font-light leading-4 mt-2">brands work with us</span>
            </div>
            <div className="flex flex-col mr-6 md:2/3 my-4">
              <span className="text-4xl font-medium">24+</span>
              <span className="w-4/5 text-xs font-light leading-4 mt-2">Use this section to describe your </span>
            </div>
          </div>
        </div>
        <div className="right md:w-[50vw] flex flex-col">
          <span className="py-2 text-4xl font-bold">Our Commitments</span>
          <span className=" font-light leading-6">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business. Use this section to describe your company and
            the products you offer. You could share your company’s story and
            details about why you are in business.{" "}
          </span>
         <span className="py-2">
         <button className="underline text-blue-700">Learn more</button>
         </span>
        </div>
      </div>
    </>
  );
}

export default Commitment;
