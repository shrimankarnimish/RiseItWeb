"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Assets/Images/riseitlogo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
 <nav
  className={`w-full bg-transparent fixed top-0 left-0 z-50 py-4 transition-transform duration-700 ease-in-out ${
    show ? "translate-y-0" : "-translate-y-full"
  }`}
>
<div className="container-wrapper">
  {/* Flex container with justify-around */}
  <div className="flex items-center justify-between">
    {/* Left: Logo */}
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </Link>
    </div>

    {/* Desktop Nav Links */}
    <div className="hidden md:flex bg-[#0D0D0D]/90 backdrop-blur-md text-[#F9FAFB] px-8 py-5 rounded-full shadow-lg gap-8 text-[18px] font-medium">
      <Link href="/about" className="hover:text-[#2E8BFF] transition-colors">
        About
      </Link>
      <a href="#" className="hover:text-[#2E8BFF] transition-colors">
        Services
      </a>
      <a href="#" className="hover:text-[#2E8BFF] transition-colors">
        Work
      </a>
      <a href="#" className="hover:text-[#2E8BFF] transition-colors">
        Blog
      </a>
    </div>

    {/* Desktop Button */}
    <div className="hidden md:block">
      <div className="bg-white/90 backdrop-blur-md px-8 py-5 rounded-full shadow-lg flex items-center gap-2 cursor-pointer">
        <span className="w-3 h-3 bg-lime-400 rounded-full breathing-dot"></span>
        <span className="text-[18px] text-gray-600 font-medium">Get in touch</span>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <div
        className="relative w-30 h-14 perspective cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-[#0D0D0D]/90 text-white rounded-3xl shadow-lg transition-transform duration-500 transform-style-preserve-3d ${
            menuOpen ? "rotate-y-180" : ""
          }`}
        >
          <span className="absolute backface-hidden font-medium text-lg">Menu</span>
          <span className="absolute backface-hidden rotate-y-180 font-medium text-lg">Close</span>
        </div>
      </div>
    </div>
  </div>
 </div> 
</nav>

  );
}
