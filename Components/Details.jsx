const Details = () => {
  return (
    <div class="flex justify-center items-center mt-10 flex-row max-md:flex-col">
      <div class="flex-1 max-md:text-center md:w-[49%]">
        <p class="mr-4 font-poppins font-light text-4xl text-white max-md:text-center">
          We understand time, that’s why we keep it{" "}
        </p>
        <p className="text-xl font-thin font-montserrat text-white inline-block mt-12 max-md:mt-3 bg-[#0092FF] p-3 max-md:block">
          Simple
        </p>
      </div>
      <div class="border-l border-gray-400 h-56 max-md:hidden "></div>
      <div class="flex-1 text-2xl font-thin text-white max-md:mt-5 max-md:text-4xl flex flex-col justify-end max-md:w-full">
        <p className="text-white text-4xl  font-montserrat font-thin max-md:block hidden max-md:mb-6 max-md:text-center max-md:mt-12">
          Parcel journey
        </p>
        <div className="md:ml-auto md:mr-[70px] max-md:text-center">
          <div>
            <p class="ml-4">Collection</p>
            <p class="ml-4 text-[#4DD7AD]">Track</p>
            <p class="ml-4">Deliver</p>
            <p class="ml-4 text-[#FFC339]">Sign</p>
          </div>
          <p className="text-xl font-thin font-montserrat text-white mt-12 max-md:mt-3 bg-[#0092FF] p-3 max-md:block">
            Return if needed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
