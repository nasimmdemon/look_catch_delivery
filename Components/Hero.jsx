import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[150px] pb-[150px] max-md:pt-[100px] max-md:pb-[100px] text-center">
      <p className="text-white text-5xl  text-center font-montserrat font-thin">
        Simplicity. Seamless.{" "}
        <span className="bg-[#0085E9] py-3 px-4 font-bold max-lg:inline-block max-lg:mt-4">
          Your journey
        </span>
      </p>

      <div className="flex justify-center items-center mt-12 md:hidden">
        <a href="#titles">
          <Image
            height={40}
            width={40}
            alt="Scroll Down"
            src="/arrow_down.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
