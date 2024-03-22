"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else if (latest < 1190) {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 bg-[#182B49]"
    >
      <div className="flex justify-between items-center font-palanquin max-container padding-x">
        {/* Logo Here */}
        <div className="h-20 w-36 relative cursor-pointer">
          <Link href="/">
            <Image fill={true} src="/logo.svg" />
          </Link>
        </div>
        {/* Menu Here */}
        <div className="text-white max-md:hidden text-left">
          <Link className="px-4 text-3xl cursor-pointer" href="/#titles">
            Business Box
          </Link>
          <Link className="px-4 text-3xl cursor-pointer" href="/coming-soon">
            Become a driver
          </Link>
        </div>
        {/* Button Here */}
        <div>
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
              <Link
                onClick={() => setOpen(false)}
                className="px-4 text-lg cursor-pointer"
                href="/#titles"
              >
                Business Box
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="px-4 text-lg cursor-pointer"
                href="/coming-soon"
              >
                Become a driver
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
