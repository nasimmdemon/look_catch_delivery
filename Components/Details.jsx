const Details = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16 flex-row max-md:flex-col gap-12">
        <div className="flex-1 ">
          <p className=" font-thin mr-4 font-poppins leading-normal text-5xl lh text-white max-md:text-left ">
            We understand time, that’s why we keep it{" "}
          </p>
          <p className="text-4xl font-normal font-montserrat rounded-sm text-white inline-block mt-12 max-md:mt-5 bg-[#0092FF] py-2 px-1 ">
            simple
          </p>
        </div>
        <div className="border-l border-gray-400 h-56 max-md:hidden "></div>
        <div className="flex-1 text-2xl font-thin text-white max-md:mt-2 max-md:text-4xl flex flex-col justify-center max-md:w-full">
          <div className="border-t border-gray-400 w-64 m-auto md:hidden max-md:mt-4"></div>

          <div className=" md:mr-[70px] max-md:text-center max-md: mt-12">
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
