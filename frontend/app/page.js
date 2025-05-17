import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center h-full font-[family-name:var(--font-geist-sans)] pt-2">
      <Navbar/>
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-[20px] text-center mt-16">
        <HeroSection/>
      </div>
      
    </div>
  );
}
