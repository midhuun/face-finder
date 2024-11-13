"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
 const isLogin = path.includes("login");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-underline bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
       
        <h1 className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
          FaceFinder
        </h1>

        
        <nav className="hidden items-center md:flex space-x-8">
         
          <a href={`${isLogin?"/":"#home"}`} className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href={`${isLogin?"/":"#pricing"}`} className="hover:text-yellow-400 transition duration-300">
            Pricing
          </a>
          <a href={`${isLogin?"/":"#about"}`} className="hover:text-yellow-400 transition duration-300">
            About Us
          </a>
          <Link href="/login" className="hover:bg-yellow-400 bg-yellow-500 py-2 px-4 rounded-lg transition duration-300">
            Login
          </Link>
        </nav>

        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <div className={`w-6 h-[2px] bg-white mb-1 transition-transform ${isOpen ? "transform rotate-45 translate-y-2.5" : ""}`}></div>
          <div className={`w-6 h-[2px] bg-white mb-1 transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-[2px] bg-white transition-transform ${isOpen ? "transform -rotate-45 -translate-y-2.5" : ""}`}></div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center space-y-8 transition-opacity duration-500">
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#pricing"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#aboutus"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#login"
            onClick={toggleMenu}
            className="bg-yellow-400 py-2 px-6 rounded-lg text-black font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
