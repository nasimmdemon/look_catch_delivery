const Details = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-row max-md:flex-col gap-12">
        <div className="flex-1 ">
          <p className=" mr-4 font-poppins font-light text-4xl text-white max-md:text-left ">
            We understand time, that’s why we keep it{" "}
          </p>
          <p className="text-xl font-light font-montserrat text-white inline-block mt-12 max-md:mt-5 bg-[#0092FF] p-3 ">
            Simple
          </p>
        </div>
        <div className="border-l border-gray-400 h-56 max-md:hidden "></div>
        <div className="flex-1 text-2xl font-thin text-white max-md:mt-2 max-md:text-4xl flex flex-col justify-center max-md:w-full">
          <div className="border-t border-gray-400 w-32 m-auto md:hidden max-md:mt-4"></div>

          <div className=" md:mr-[70px] max-md:text-center">
            <div className="max-md:text-left mt-4 font-montserrat tracking-widest">
              <p className="ml-4">Airport transfers</p>
              <p className="ml-4">Events</p>
              <p className="ml-4">Staff commute</p>
              <p className="ml-4">Executive Travel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
