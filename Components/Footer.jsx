const Footer = () => {
  return (
    <>
      <div className="max-md:hidden text-white font-extralight 2xl:w-[20%] xl:w-[23%] lg:w-[30%] md:w-[35%]  m-auto relative">
        <div className="h-[170px] absolute top-20 left-[-90px] w-[1px] bg-white "></div>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2 block">
          Mobile/Web App
        </span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2 block">
          Account Managers
        </span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2 block">
          Budget Control
        </span>
        <span className=" p-4 max-md:pt-2 text-3xl md:p-2 block">
          Staff management
        </span>
        <span className=" p-4 max-md:pt-2 text-3xl md:p-2 block">
          Trained drivers
        </span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2 block">
          24/7 Support
        </span>
      </div>
      <div
        className=" flex flex-col md:hidden  md:ml-[460px] text-white items-left justify-left gap-0 max-md:border-r mr-32 text-4
       font-thin mt-24 mb-24"
      >
        <div className="max-md:hidden h-[160px] w-[1px] md:mt-[-160px] bg-white md:relative top-[250px] left-[-70px]"></div>

        <span className="p-4 max-md:pt-2 text-3xl md:p-2">Mobile/Web App</span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2">24/7 Support</span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2">
          Account Managers
        </span>
        <span className="p-4 max-md:pt-2 text-3xl md:p-2">Budget Control</span>
        <span className=" p-4 max-md:pt-2 text-3xl md:p-2">
          Staff management
        </span>
        <span className=" p-4 max-md:pt-2 text-3xl md:p-2">
          Trained drivers
        </span>
      </div>
    </>
  );
};

export default Footer;
