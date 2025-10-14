import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const images = [
  'https://i.postimg.cc/V6dtt9qS/A4-1.png',
  'https://i.postimg.cc/13y410jz/unnamed.png',
  'https://i.postimg.cc/JhT6mq7D/Social-Poster-1.jpg',
  'https://i.postimg.cc/9WFzxp9Q/BEATS-PRO.png',
  'https://i.postimg.cc/SRpk7k00/VEG-BIRYANI.png',
  'https://i.postimg.cc/xCm9zq4F/RED-BULL.png',
  'https://i.postimg.cc/mDvS2pvs/Social-Poster-2.jpg',
  'https://i.postimg.cc/6phcB06n/Frame-7.png',
  'https://i.postimg.cc/wjk29Vx3/Frame-10.png',
  'https://i.postimg.cc/6phcB06Q/My-work.jpg',
  'https://i.postimg.cc/V6dtt9qS/A4-1.png',
  'https://i.postimg.cc/mDvS2pvs/Social-Poster-2.jpg',
];

const InstagramFeed: React.FC = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();
  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="instagram-feed" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Follow My Work</h2>
          <a 
            href="https://www.instagram.com/_kunalshirsath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg hover:text-black transition-colors"
          >
            @_kunalshirsath on Instagram
          </a>
        </div>
      </div>
      
      <div className="w-full overflow-hidden group">
        <ul className="flex animate-infinite-scroll">
          {duplicatedImages.map((src, index) => (
            <li key={index} className="flex-shrink-0 mx-4 h-80">
              <img 
                src={src} 
                alt={`Instagram post ${index + 1}`} 
                className="h-full w-auto object-contain rounded-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InstagramFeed;
