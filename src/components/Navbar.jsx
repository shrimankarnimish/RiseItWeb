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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={150} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex bg-[#0D0D0D]/90 backdrop-blur-md text-[#F9FAFB] px-8 py-5 rounded-full shadow-lg gap-8 text-[18px] font-medium">
            <Link
              href="/about"
              className="hover:text-[#2E8BFF] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[#2E8BFF] transition-colors"
            >
              Services
            </Link>
            <Link href="#" className="hover:text-[#2E8BFF] transition-colors">
              Work
            </Link>
            <Link href="#" className="hover:text-[#2E8BFF] transition-colors">
              Careers
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <Link href="/contactus">
          <div className="hidden md:block">
            <div className="bg-white/90 backdrop-blur-md px-8 py-5 rounded-full shadow-lg flex items-center gap-2 cursor-pointer">
              <span className="w-3 h-3 bg-lime-400 rounded-full breathing-dot"></span>
              <span className="text-[18px] text-gray-600 font-medium">
                Get in touch
              </span>
            </div>
          </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-6 py-3 rounded-3xl bg-[#0D0D0D]/90 text-white shadow-lg font-medium"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-end space-y-3">
            {/* Black pill-shaped menu */}
            <div className="bg-[#0D0D0D]/95 backdrop-blur-md text-white rounded-3xl shadow-xl flex flex-col items-center py-4 px-8 space-y-4">
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium"
              >
                Work
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium"
              >
                Careers
              </Link>
            </div>

            {/* White Contact Button */}
            <div
              onClick={() => setMenuOpen(false)}
              className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Link
                href="/contactus"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow hover:text-[#2E8BFF] transition-colors"
              >
                <span className="w-3 h-3 bg-lime-400 rounded-full breathing-dot"></span>
                <span className="text-gray-700 font-medium">Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
