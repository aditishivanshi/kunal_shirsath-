import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const imageUrls = [
  'https://i.postimg.cc/tT968ZM8/551739475-17856524808524591-4036319579675361521-n-1.png',
  'https://i.postimg.cc/Pf3DFqQk/Frame-1618871292.png',
  'https://i.postimg.cc/44LcF3bS/Frame-1618871293.png',
  'https://i.postimg.cc/SRvzXZxj/Frame-1618871294.png',
  'https://i.postimg.cc/FzRLHtmy/Frame-1618871295.png',
  'https://i.postimg.cc/9FD93jLW/Frame-1618871296.png',
  'https://i.postimg.cc/bNZnXjmY/Frame-1618871297.png',
  'https://i.postimg.cc/fRX0Lf4r/Frame-1618871298.png',
  'https://i.postimg.cc/qMW34ZFC/Frame-1618871299.png',
  'https://i.postimg.cc/VL2CmHTQ/Frame-1618871300.png',
  'https://i.postimg.cc/sDbhs0LT/Frame-1618871301.png',
  'https://i.postimg.cc/R0BJnJ4q/Frame-1618871302.png',
  'https://i.postimg.cc/nLJ9Q9pr/Frame-1618871303.png',
  'https://i.postimg.cc/FHcJRV5v/Frame-1618871304.png',
  'https://i.postimg.cc/FHcJRV5h/Frame-1618871305.png',
  'https://i.postimg.cc/y89Sdy4W/Frame-1618871306.png',
  'https://i.postimg.cc/Qd5WtJGH/Frame-1618871307.png',
  'https://i.postimg.cc/DzT4b4nf/Frame-1618871308.png',
  'https://i.postimg.cc/k5mRtRqB/Frame-1618871309.png',
  'https://i.postimg.cc/gJcwg9wP/Frame-1618871310.png',
  'https://i.postimg.cc/d3LhK8jM/Frame-1618871311.png',
  'https://i.postimg.cc/Kz91V9Lk/Frame-1618871312.png',
  'https://i.postimg.cc/ydfD5f9d/Frame-1618871314.png',
  'https://i.postimg.cc/qqzNd8x7/Frame-1618871315.png'
];

const GalleryImage: React.FC<{ src: string, index: number }> = ({ src, index }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`m-1 group center transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 '}`}
      style={{ transitionDelay: `${(index % 2) * 100 + Math.floor(index / 2) * 50}ms` }}
    >
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        className="transition-transform duration-500 ease-in-out aspect-[4/5]"
       
      />
    </div>
  );
};


const WorkGallery: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="grid m-2 md:m-16 grid-cols-2 md:grid-cols-3">
        {imageUrls.map((url, index) => (
          <GalleryImage key={index} src={url} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;