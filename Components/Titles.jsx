const Titles = () => {
  return (
    <section className="pt-32">
      <div className="flex md:justify-center gap-20 items-center max-md:justify-center">
        <div className="flex items-center justify-center gap-4">
          <p className="text-white text-4xl font-montserrat font-thin ">
            Business box
          </p>
          <div className="h-5 w-5 bg-white"></div>
        </div>
        <div>
          <p className="text-white text-4xl  font-montserrat font-thin max-md:hidden ">
            Parcel journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Titles;
