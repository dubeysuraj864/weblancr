function OurWork() {
    
    return ( <>
    <div className="work text-center flex flex-col my-10 items-center">
        <div className="text-3xl font-bold my-4">
            Our Work
        </div>
        <div className="md:w-[30vw] font-light">
        Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. 
        </div>
        <div className=" flex my-10">
            {/*  */}
            <div className="w-[26vw]  m-4">
                <div>
                    <img className="w-[30vw] h-[18vw] object-cover my-4 rounded-2xl" src="https://images.unsplash.com/photo-1555597906-44a7f7e3e0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="text-xl">
                    Apple
                </div>
                <div className="text-xs m-1 font-light">
                Use this section to describe your 
                </div>
            </div>
            <div className="w-[26vw] m-4">
                <div>
                    <img className="w-[30vw] h-[18vw] object-cover my-4 rounded-2xl" src="https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="" />
                </div>
                <div className="text-xl">
                    NBC
                </div>
                <div className="text-xs m-1 font-light">
                Use this section to describe your 
                </div>
            </div>
            <div className="w-[26vw] m-4">
                <div>
                    <img className="w-[30vw] h-[18vw] object-cover my-4 rounded-2xl" src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                </div>
                <div className="text-xl">
                    Lamborghini
                </div>
                <div className="text-xs m-1 font-light">
                Use this section to describe your 
                </div>
            </div>
            {/*  */}
          
        </div>
        <button className="bg-[#3461FF] text-white py-2 rounded-3xl px-4">See More</button>
    </div>
    </> );
}

export default OurWork;