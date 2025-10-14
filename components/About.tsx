import React from 'react';
import { useParallax } from '../hooks/useParallax';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const imageParallax = useParallax(0.1);
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();
    
    return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="overflow-hidden">
               <div style={imageParallax}>
                  <img 
                      src="https://i.postimg.cc/mg08bPBC/Gemini-Generated-Image-9hxn5f9hxn5f9hxn.png" 
                      alt="Kunal Shirsath" 
                      className="w-full h-auto object-cover"
                  />
               </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">About Me</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              I'm Kunal Shirsath, a passionate graphic designer with a keen eye for detail and a love for creating clean, impactful designs. My work is driven by the belief that good design is not just about aesthetics, but about clear communication and creating lasting impressions.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              With a focus on logo design, branding, and UI/UX, I help businesses connect with their audiences through thoughtful and strategic visual storytelling. I thrive on collaborating with clients to bring their vision to life, ensuring every project is both beautiful and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
