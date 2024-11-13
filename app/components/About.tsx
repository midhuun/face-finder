import React from "react";
import { IoEarOutline, IoEarSharp } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiHearthisdotat, SiOpensearch, SiPagespeedinsights } from "react-icons/si";

const AboutUsPage: React.FC = () => {
  return (
    <div id="about" className="bg-black  font-underline  text-white py-16 px-6 sm:px-12 lg:px-16">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-4">About Us</h2>
        <p className="md:text-lg text-gray-300">
          We help you find any image on the web and uncover all the information you need about it. Our mission is to make image discovery and analysis simple and insightful.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-16">

        {/* Our Purpose Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">Our Purpose</h3>
          <p className="md:text-xl text-gray-300 leading-relaxed  mb-4">
            Our platform is designed to help you find any image from across the web and provide all the important details about it. From social media to image databases, we bring you the most relevant images with all the metadata you need to make informed decisions.
          </p>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            Whether you're a researcher, designer, or someone looking to uncover the story behind an image, we make sure you have the tools to get there faster and smarter.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-3xl mx-auto text-center bg-[#121212] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">Why Choose Us?</h3>
          <p className="md:text-lg text-gray-300 mb-6">
            Here’s why our platform is the best choice for discovering and analyzing images:
          </p>
          <ul className="md:text-lg text-start list-disc  text-gray-300   mx-2 space-y-4">
            <li className=""><strong><SiOpensearch className="inline mx-2 text-blue-500"/>Advanced Image Search:</strong> Our technology ensures you can find any image, no matter where it’s from.</li>
            <li><strong><SiPagespeedinsights className="inline mx-2 text-red-500"/>Detailed Insights:</strong> We provide more than just the image; we give you metadata, usage rights, and much more.</li>
            <li><strong><SiHearthisdotat className="inline  mx-2 text-blue-500"/>Global Access:</strong> Find images from across the world, aggregated from multiple sources and platforms.</li>
            <li ><strong><LiaLaptopCodeSolid className="inline mx-2 text-blue-500"/>User-Friendly :</strong> The platform is easy to use, ensuring a seamless experience for everyone.</li>
          </ul>
        </section>

        {/* Our Vision Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">Our Vision</h3>
          <p className="md:text-xl text-gray-300 leading-relaxed mb-4">
            Our vision is to provide a comprehensive image discovery and analysis tool that is easy to use, yet powerful. We want to change how people search for and interact with images across the internet.
          </p>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            By connecting images to their full context and metadata, we give users the ability to explore images in new and meaningful ways.
          </p>
        </section>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="/get-started"
          className="inline-block px-8 py-4 text-xl font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutUsPage;
