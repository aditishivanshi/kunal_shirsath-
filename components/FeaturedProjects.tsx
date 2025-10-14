import React from 'react';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const portfolioItems: Project[] = [
  { id: 1, title: 'Various Types', category: 'Social Media Creatives', imageUrl: 'https://i.postimg.cc/Kz4V9R79/Frame-1618872984.png', description: 'A complete branding system for a luxury cosmetics line...', behanceUrl: 'https://www.behance.net/gallery/232355057/Graphic-Design-Portfolio-2025' },
  { id: 2, title: 'Stridex', category: 'Branding & Packaging', imageUrl: 'https://i.postimg.cc/YChdKJLC/Frame-1948754795.png', description: 'An intuitive mobile app designed for modern travelers...', behanceUrl: 'https://www.behance.net/gallery/232647667/StrideX-Packaging-Design' },
  { id: 3, title: 'Khetiwallah', category: 'Logo Desing', imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ab3b08235140189.Y3JvcCwxMTUwLDkwMCwyMjUsMA.png', description: 'Vibrant and energetic poster designs that capture the nostalgic spirit...', behanceUrl: 'https://www.behance.net/gallery/235140189/Khetiwallah-Logo-Desing' },
  { id: 4, title: 'Kollabgram', category: 'Logo Design', imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e1cbc7235139857.Y3JvcCwxMDA3LDc4OCwxOTcsMA.png', description: 'A strong and modern logo for a financial tech company...', behanceUrl: 'https://www.behance.net/gallery/235139857/Kollabgram-Logo-Design' },
  { id: 5, title: 'Eventt', category: 'Web Design', imageUrl: 'https://i.postimg.cc/QxSQM0Zy/Frame-1948754794.png', description: 'Fresh and vibrant packaging design for an organic juice brand.', behanceUrl: 'https://www.behance.net/gallery/232647435/Landing-Page-UI-Design' },
  { id: 6, title: 'Working', category: 'Mobile App Design', imageUrl: 'https://i.postimg.cc/SKG2ZKQz/hshsh.png', description: 'Engaging social media templates and assets for a popular podcast.', behanceUrl: 'https://www.behance.net/gallery/232644697/Working-App-UI-Design' },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    // FIX: Changed HTMLDivElement to HTMLAnchorElement to match the element type of the ref.
    const [ref, isVisible] = useScrollAnimation<HTMLAnchorElement>();
    return (
    <a
      ref={ref}
      href={project.behanceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block overflow-hidden group transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <p className="text-sm tracking-widest uppercase text-gray-300">{project.category}</p>
          <h3 className="text-2xl font-semibold mt-1 text-white">{project.title}</h3>
        </div>
      </div>
    </a>
  );
};


const FeaturedProjects: React.FC = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();
    return (
        <section id="portfolio" className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div 
                    ref={headerRef}
                    className={`text-left mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Work</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl text-lg">A selection of projects that define my creative and strategic approach to design.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <ProjectCard key={item.id} project={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;