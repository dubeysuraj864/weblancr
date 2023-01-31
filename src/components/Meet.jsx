function Meet() {
  return (
    <>
      <div className="meet flex flex-col md:flex-row items-center justify-center  my-20">
        <div className="left md:w-[50%] flex flex-col items-center justify-center ">
          <div className="flex">
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-xl"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
              alt=""
            />
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-xl"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-full"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-xl"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <img
              className="w-[130px] h-[110px] object-cover m-2 rounded-xl"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="right p-4 md:w-[50%] md:pl-10 flex flex-col items-start justify-center">
          <div className="text-2xl font-bold">Meet Our Team</div>
          <div className="text-xl my-2 font-light md:w-[30vw]">
            Use this section to describe your company and the
          </div>
          <div className="text-md my-2 font-light md:w-[30vw]">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.
          </div>
          <button className="bg-[#3461FF] text-white py-2 rounded-3xl px-4 mt-6">
            See More
          </button>
        </div>
      </div>
    </>
  );
}

export default Meet;
