import Image from "next/image";
import image_1 from "@/public/s51.png";
import image_2 from "@/public/s52.png";
import image_3 from "@/public/s53.png";
import image_4 from "@/public/s54.png";

export default function Section5() {
  return (
    <section className="bg-[#9747FF] pt-16 pb-32 mt-12 padding-x">
      <div className="flex justify-between">
        <div>
          <Image src={image_1} />
        </div>
        <div className="mt-56">
          <Image src={image_2} />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <Image src={image_3} />
        </div>
        <div className="mt-56">
          <Image src={image_4} />
        </div>
      </div>
    </section>
  );
}
