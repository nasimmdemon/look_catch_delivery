const Details = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-row max-md:flex-col gap-12">
        <div className="flex-1 max-md:text-center md:w-[49%] md:text-right ">
          <p className=" mr-4 font-poppins font-light text-4xl text-white max-md:text-left max-md:pl-20">
            We understand time, that’s why we keep it{" "}
          </p>
          <p className="text-xl font-light font-montserrat text-white inline-block mt-12 max-md:mt-5 bg-[#0092FF] p-3 max-md:block">
            Simple
          </p>
        </div>
        <div className="border-l border-gray-400 h-56 max-md:hidden "></div>
        <div className="flex-1 text-2xl font-thin text-white max-md:mt-5 max-md:text-4xl flex flex-col justify-center max-md:w-full">
          <div className="border-t border-gray-400 w-full md:hidden max-md:mt-4"></div>
          <p className="text-white text-4xl  font-montserrat font-thin max-md:block hidden max-md:mb-6 max-md:text-center max-md:mt-4">
            Parcel journey
          </p>
          <div className=" md:mr-[70px] max-md:text-center">
            <div className="max-md:text-left max-md:w-[50%] max-md:m-auto">
              <p className="ml-4">Collection</p>
              <p className="ml-4 text-[#4DD7AD]">Track</p>
              <p className="ml-4">Deliver</p>
              <p className="ml-4 text-[#FFC339]">Sign</p>
            </div>
            <p className="text-xl font-light inline-block ml-4 font-montserrat text-white mt-12 max-md:mt-5 bg-[#0092FF] p-3 max-md:block">
              Return if needed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
