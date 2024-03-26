import Image from "next/image";
import HeroSliderImage from "/public/hero_slider_main.svg";

const Details = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-0 flex-row max-md:flex-col gap-12">
        <div className="flex-1">
          <p className=" font-extralight mt-16 mr-4 font-poppins leading-normal text-5xl lh text-white max-md:text-left ">
            We understand time, that’s why we keep it{" "}
          </p>
          <p className="text-4xl font-bold font-montserrat rounded-sm text-white inline-block mt-2 max-md:mt-0 bg-[#9747FF] py-2 px-1 ">
            simple
          </p>
        </div>
        <div className="flex-1 max-md:h-[300px] max-md:w-[300px] max-md:ml-auto">
          <Image quality={100} src={HeroSliderImage} objectFit="cover" />
        </div>
      </div>
    </>
  );
};

export default Details;
