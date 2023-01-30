function Banner() {
  return (
    <>
      <div className="banner my-20 left-0 text-white h-[30vh] flex justify-center items-center overflow-hidden px-10">
        <img className="absolute brightness-50 -z-10 left-0 h-[40vh] object-cover w-[100vw] " src="https://images.unsplash.com/photo-1673192749312-1d67a209923a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" alt="" />
        <div className="left md:w-[50vw] text-2xl font-bold">Start your journey with us now</div>
        <div className="right md:w-[50vw] ">
          <p>
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business. Use this section to describe your company and
            the products you offer. You could share your company’s story and{" "}
          </p>
          <button className="mt-4 underline">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Banner;
