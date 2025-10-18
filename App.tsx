import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import DesignProcess from './components/DesignProcess';
import Contact from './components/Contact';
import WorkGallery from './components/WorkGallery';

const App: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] text-[#222]">
      <Header />
      <main>
        <Hero />
        <WorkGallery />
        <FeaturedProjects />
        <About />
        <Services />
        <DesignProcess />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;