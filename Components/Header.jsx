"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center font-palanquin max-container padding-x  ">
      {/* Logo Here */}
      <div className="h-36 w-36 relative">
        <Image fill={true} src="/logo.svg" />
      </div>
      {/* Menu Here */}
      <div className="text-white max-md:hidden">
        <a className="px-4 text-lg" href="#">
          Business Box
        </a>
        <a className="px-4 text-lg" href="#">
          Become a courier
        </a>
      </div>
      {/* Button Here */}
      <div>
        <a
          href="#"
          className="bg-[#33425F] text-lg p-3 text-white font-bold rounded-lg max-md:hidden"
        >
          Coming Soon
        </a>
        <Image
          height={30}
          width={30}
          className="md:hidden"
          alt="hamburger_icon"
          src="/hamburger.png"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="bg-white p-5 absolute top-24 right-8 rounded-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <a className="px-4 text-lg" href="#">
              Business Box
            </a>
            <a className="px-4 text-lg" href="#">
              Become a courier
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;
