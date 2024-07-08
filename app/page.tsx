import Navbar from "@/components/Navbar";
import HomeHeader from "@/components/HomeHeader";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
  
  <div>
    <Navbar/>
    <HomeHeader/>
    <Features/>
    <Footer/>
  </div>
  );
}
