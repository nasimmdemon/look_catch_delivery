import Details from "@/Components/Details";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Titles from "@/Components/Titles";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-container padding-x ">
        <Hero />
        <Titles />
        <Details />
        <Footer />
      </div>
      <footer className="text-white mt-10 text-center">
        <div className="border-t-[0.5px] border-[#C7C5C5] w-96 m-auto mb-3 max-md:w-56"></div>
        <p className="padding-x pb-4 font-thin">
          Copyright 2024 &copy; Look Catch Ltd
        </p>
      </footer>
    </>
  );
}
