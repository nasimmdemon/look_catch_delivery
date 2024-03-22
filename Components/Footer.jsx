const Footer = () => {
  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-6 text-white items-center justify-center gap-3 max-md:gap-6 mt-12 text-4
       font-thin"
      >
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          Mobile/Web
          <br /> App
        </span>
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          24/7
          <br /> Support
        </span>
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          Account <br />
          Managers
        </span>
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          Budget <br />
          Control
        </span>
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          Staff <br />
          management
        </span>
        <span className="border border-white p-4 max-md:py-8 max-md:pt-2 text-2xl">
          Trained <br />
          drivers
        </span>
      </div>
    </>
  );
};

export default Footer;
