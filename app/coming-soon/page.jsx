const ComingSoon = () => {
  return (
    <>
      <div className="pt-32 flex justify-start items-start mt-10 flex-row max-md:flex-col gap-12 max-container padding-x">
        <div className="flex-2 ">
          <p className="mr-4 font-poppins font-extralight text-6xl text-white  text-left max-md:border-r max-md:pr-5 max-md:mb-10">
            Becoming a <br />
            driver
          </p>
        </div>
        <div className="border-l border-gray-400 h-80 max-md:hidden "></div>
        <div className="flex-1 text-2xl font-thin text-white max-md:mt-2 max-md:text-4xl flex flex-col justify-center max-md:w-full ">
          {/* <div className="border-t border-gray-400 w-96 m-auto md:hidden max-md:mt-4"></div> */}
          <span className=" mt-32 ml-32 flex-1 text-white bg-[#0092FF] py-3 font-bold text-4xl max-md:text-center text-center w-60 rounded-sm max-md:mt-5 max-md:m-auto">
            Coming Soon
          </span>
        </div>
      </div>
      <footer className="text-white mt-20 text-center">
        <div className="border-t-[0.5px] border-[#C7C5C5] w-96 m-auto max-md:w-56"></div>
        <p className="padding-x pb-4 font-thin">
          Copyright 2024 &copy; Look Catch Ltd
        </p>
      </footer>
    </>
  );
};

export default ComingSoon;
