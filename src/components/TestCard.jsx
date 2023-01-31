function TestCard() {
  return (
    <>
      <div className="test-card text-black w-[80vw] md:w-[30vw] md:h-[36vh] bg-[#F8F9FF] p-4 m-2 rounded-xl cursor-pointer hover:bg-[#3461FF] transition-all group">
        <div className="top flex items-start group-hover:text-white">
          <div className="flex">
            <img className="w-[60px] h-[60px] object-cover rounded-full mr-4" src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80" alt="" />
          </div>
          <div>
            <div className="text-lg font-bold">Amelia Joseph</div>
            <div>Chief Manager</div>
          </div>
        </div>
        <div className="bottom my-4 font-light text-lg group-hover:text-white">
          <p>
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default TestCard;
