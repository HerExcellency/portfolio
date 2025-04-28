import React from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          {/* <source src="//res.cloudinary.com/ijeomaonuaju/video/upload/v1739461987/Untitled_design_noacrn.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0  bg-black/1 bgImg1" ></div>
      </div>

      {/* Content */}
      <div className="relative z-[10] max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-center w-full ">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Software Developer
          </h1>
          <p className="text-xl text-black mb-8">
            Frontend Developer with 5 years of experience building modern web applications
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/OnuajuIjeomaFrontendDeveloper.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition border border-gray-800"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg  border-gray-800 hover:bg-white hover:text-gray-800 transition hover:border-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;