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
            <div className=" relative flex justify-center">
              <div className="h-[120px] w-[1px]  absolute left-3 top-[34px] text–center bg-white"></div>
            </div>
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
            <div className=" relative flex justify-center">
              <div className="h-[120px] w-[1px]  absolute left-[-80px] top-[-58px] text–center bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-container lg:hidden flex-col flex pt-12">
        <div className=" relative flex justify-center">
          <div className="h-[90px] w-[1px] rotate-[-30deg] absolute left-4 top-[-94px] text–center bg-white"></div>
        </div>
        <div className=" relative max-md:w-[420px] max-lg:w-[620px] max-lg:right-[-320px] right-[-150px] max-md:right-[-120px] max-sm:right-[-40px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_1}
            objectFit="contain"
          />
          <div className=" relative flex justify-center">
            <div className="h-[120px] w-[1px]  absolute left-80 top-[34px] text–center bg-white"></div>
          </div>
        </div>
        <div className="mt-48 max-md:mt-32 max-sm:mt-12 relative left-[-150px] max-md:left-[-130px] max-sm:left-[-80px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_2}
            width={800}
            objectFit="contain"
          />
          <div className=" relative flex justify-center">
            <div className="h-[120px] w-[1px]  absolute left-16 top-[34px] text–center bg-white"></div>
          </div>
        </div>
        <div className="max-md:w-[420px] max-lg:w-[620px] max-lg:right-[-320px] mt-48 max-md:mt-32 max-sm:mt-12 relative right-[-150px] max-md:right-[-130px] max-sm:right-[-20px] w-[480px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_3}
            objectFit="contain"
          />
          <div className=" relative flex justify-center">
            <div className="h-[130px] w-[1px] rotate-[-50deg] absolute left-[9px] top-[-94px] text–center bg-white"></div>
          </div>
        </div>
        <div className="mt-48 max-md:mt-32 max-sm:mt-12 relative left-[-150px] max-md:left-[-130px] max-sm:left-[-130px] w-[520px]">
          <Image
            unoptimized={true}
            quality={100}
            src={mobile_4}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
