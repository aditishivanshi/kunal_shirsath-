import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import DesignProcess from './components/DesignProcess';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] text-[#222]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DesignProcess />
        <FeaturedProjects />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
    </div>
  );
};

export default App;