const ComingSoon = () => {
  return (
    <div className="pt-32 flex justify-start items-center mt-10 flex-row max-md:flex-col gap-12 max-container padding-x">
      <div className="flex-1">
        <p className="mr-4 font-poppins font-light text-6xl text-white max-md:text-center text-right">
          Becoming a <br />
          driver
        </p>
      </div>
      <div className="border-l border-gray-400 h-56 max-md:hidden "></div>
      <div className="flex-1 text-2xl font-thin text-white max-md:mt-2 max-md:text-4xl flex flex-col justify-center max-md:w-full">
        <div className="border-t border-gray-400 w-96 m-auto md:hidden max-md:mt-4"></div>
        <span className=" flex-1 text-white bg-[#0092FF] py-3 px-6  text-3xl max-md:text-center text-center w-96 max-md:mt-5 max-md:m-auto">
          Coming Soon
        </span>
      </div>
    </div>
  );
};

export default ComingSoon;
