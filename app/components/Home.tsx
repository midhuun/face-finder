import React from 'react'
import Image from "next/image";
const Home = () => {
  return (
    <div id="home" className="relative  flex flex-col-reverse md:flex-row items-center justify-center h-screen bg-black overflow-hidden p-6">
      <div className="absolute inset-y-0 left-0 w-1/2  opacity-30 blur-2xl rounded-full md:w-1/3 -z-10"></div>
      <div className="w-full md:w-1/2 text-center md:text-left text-white relative p-6 md:p-10 rounded-lg bg-gradient-to-b from-transparent via-black/30 to-black/50 backdrop-blur-sm shadow-lg">
        <h1 className="text-3xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeIn">
          <span className="">
            Discover Every Image
          </span>
          <br /> on the Internet
        </h1>

        <p className="text-xl  font-underline tracking-widest md:text-2xl font-semibold mb-10 animate-fadeIn delay-300">
          Your ultimate destination to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-400">find, analyze, and explore</span> images with deep insights. Get detailed analysis with our exclusive premium plan.
        </p>

        <div className="flex font-underline flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center md:items-start">
          <div className="flex items-center space-x-2 animate-fadeIn delay-500">
            <span className="text-yellow-400 text-2xl">⭐</span>
            <span className="text-lg">AI-Powered Insights</span>
          </div>
          <div className="flex items-center space-x-2 animate-fadeIn delay-700">
            <span className="text-pink-400 text-2xl">⚡</span>
            <span className="text-lg">Fast Processing</span>
          </div>
          <div className="flex items-center space-x-2 animate-fadeIn delay-900">
            <span className="text-blue-400 text-2xl">🔒</span>
            <span className="text-lg">Secure & Private</span>
          </div>
        </div>

       <a href="#upload"> <button className="mt-10 px-10 py-4 bg-white shadow-white text-black font-bold text-lg rounded-lg shadow-sm border hover:scale-105 transition-transform duration-300 animate-bounce">
          Get Started
        </button>
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 animate-slideInRight">
      <Image src='/face.jpg' height={300} width={300} alt='Hero Image'  className=" hero-img object-contain h-[150px] md:h-auto rounded-lg shadow-lg" /> 
      </div>
    </div>
  )
}

export default Home