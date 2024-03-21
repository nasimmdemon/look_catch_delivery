import Details from "@/Components/Details";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Titles from "@/Components/Titles";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Titles />
      <Details />
      <Footer />
    </>
  );
}
