import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[150px] pb-[150px] max-md:pt-[120px] max-md:pb-[120px] text-center">
      <p className="text-white text-6xl  text-center font-montserrat font-extralight">
        Simplicity. Seamless.{" "}
        <span className="bg-[#0085E9] py-3 px-4 font-bold max-xl:inline-block max-lg:mt-4 text-5xl">
          Your journey
        </span>
      </p>

      <div className="flex justify-center items-center mt-24 md:hidden">
        <a href="#titles">
          <Image
            height={40}
            width={40}
            alt="Scroll Down"
            src="/arrow_down.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
