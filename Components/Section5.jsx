import Image from "next/image";
import image_1 from "@/public/slide1.png";
import image_2 from "@/public/slide2.png";
import image_3 from "@/public/slide3.png";
import image_4 from "@/public/slide4.png";
import mobile_1 from "@/public/mobile_slide_1.png";
import mobile_2 from "@/public/mobile_slide_2.png";
import mobile_3 from "@/public/mobile_slide_3.png";
import mobile_4 from "@/public/mobile_slide_4.png";

export default function Section5() {
  return (
    <section className="bg-[#9747FF] bg-opacity-[56%] pt-16 pb-32 padding-x overflow-hidden">
      <div className="max-container max-lg:hidden">
        <div className="flex justify-center relative">
          <div className="h-[120px] w-[0.5px] rotate-[-30deg] absolute top-[-35px] text–center bg-white"></div>
        </div>
        <div className="flex justify-between relative">
          <div className="">
            <Image
              unoptimized={true}
              quality={100}
              src={image_1}
              width={500}
              objectFit="contain"
            />
          </div>
          <div className="mt-12 pl-3">
            <Image
              quality={100}
              src={image_2}
              width={600}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Image
              quality={100}
              src={image_3}
              width={650}
              objectFit="contain"
            />
          </div>
          <div className="mt-44 pl-3">
            <Image
              quality={100}
              src={image_4}
              width={500}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="max-container lg:hidden flex-col flex pt-12">
        <div className=" relative flex justify-center">
          <div className="h-[90px] w-[0.5px] rotate-[-30deg] absolute left-4 top-[-94px] text–center bg-white"></div>
        </div>
        <div className=" relative right-[-150px] max-md:right-[-130px] max-sm:right-[-80px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_1}
            width={800}
            objectFit="contain"
          />
        </div>
        <div className="mt-48 max-md:mt-32 max-sm:mt-12 relative left-[-150px] max-md:left-[-130px] max-sm:left-[-80px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_2}
            width={800}
            objectFit="contain"
          />
        </div>
        <div className="mt-48 max-md:mt-32 max-sm:mt-12 relative right-[-150px] max-md:right-[-130px] max-sm:right-[-80px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_3}
            width={750}
            objectFit="contain"
          />
        </div>
        <div className="mt-48 max-md:mt-32 max-sm:mt-12 relative left-[-150px] max-md:left-[-130px] max-sm:left-[-80px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_4}
            width={800}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
