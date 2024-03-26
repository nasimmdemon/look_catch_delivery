const Titles = () => {
  return (
    <section
      id="titles"
      className="mt-24 max-md:mt-12 flex justify-left items-center gap-2"
    >
      <div className=" border-r border-white flex justify-center items-center gap-2 max-md:hidden">
        <p className="text-white text-3xl font-montserrat font-bold mr-3 tracking-[0.3em]">
          Business box
        </p>
        <div className="h-8 w-8 border-[0.5px] rounded-lg m-2 mt-3 mr-8"></div>
      </div>
      <span className="text-xl p-3 ml-0 tracking-widest max-md:hidden text-white font-extralight">
        Coming Soon
      </span>
      <div className=" md:hidden flex flex-col justify-center items-start gap-2 ">
        <p className="text-white text-5xl font-montserrat font-bold tracking-widest">
          Business
        </p>
        <span className="text-white text-5xl font-montserrat font-bold flex tracking-widest items-center">
          <div className="flex justify-center items-center">
            box{" "}
            <div className="h-8 w-8 border-[0.5px] rounded-lg ml-2 mt-2"></div>
          </div>
          <span className="text-xl border-l p-3 ml-6 font-extralight tracking-normal">
            Coming Soon
          </span>
        </span>
      </div>
    </section>
  );
};

export default Titles;
