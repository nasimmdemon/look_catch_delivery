const Titles = () => {
  return (
    <section
      id="titles"
      className="mt-24 max-md:mt-12 flex justify-left items-center gap-2"
    >
      <div className=" border-r border-white flex justify-center items-center gap-2 max-md:hidden">
        <p className="text-white text-5xl font-montserrat font-thin ">
          Business box
        </p>
        <div className="h-8 w-8 bg-white m-2"></div>
      </div>
      <div className=" md:hidden flex flex-col justify-center items-start gap-2 ">
        <p className="text-white text-5xl font-montserrat font-thin tracking-widest">
          Business
        </p>
        <span className="text-white text-5xl font-montserrat font-thin flex tracking-widest items-center">
          box <div className="h-8 w-8 bg-white m-2"></div>
          <span className="text-xl border-l p-3 ml-6 tracking-normal">
            Coming Soon
          </span>
        </span>
      </div>
    </section>
  );
};

export default Titles;
