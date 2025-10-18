import React from 'react';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const parallaxStyle = useParallax(0.2);

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div
        style={parallaxStyle}
        className="absolute top-0 left-0 w-full h-[150%] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
         <img src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="Abstract background" className="w-full h-full object-cover opacity-40"/>

      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-semibold text-[#222] tracking-tight leading-tight mb-4">
          Hello! I’m Kunal<br className="hidden md:block" /> Graphic & UI Designer.
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 font-normal tracking-wide">
          I design meaningful brand identities and digital experiences that connect design and purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;