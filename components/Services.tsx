import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceItem: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`border border-gray-200 p-8 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-semibold mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesList = [
    { title: 'Logo Design & Branding', description: 'Creating unique visual identities that resonate with your audience and stand the test of time.' },
    { title: 'UI/UX Design', description: 'Designing intuitive and elegant interfaces for mobile apps and websites that enhance user experience.' },
    { title: 'Social Media Creatives', description: 'Crafting engaging visuals tailored for platforms like Instagram, Facebook, and more.' },
    { title: 'Posters & Packaging', description: 'Designing compelling print materials and packaging that capture attention on the shelf.' },
    { title: 'Thumbnails & Digital Assets', description: 'Producing eye-catching thumbnails and digital graphics that drive clicks and engagement.' },
    { title: 'Print & Editorial Design', description: 'Laying out beautiful and readable content for magazines, brochures, and other print media.' },
  ];
  
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What I Do</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">My design services are tailored to build a strong, cohesive, and visually appealing brand presence across all platforms.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceItem key={service.title} title={service.title} description={service.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;