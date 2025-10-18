import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const imageUrls = [
      'https://i.postimg.cc/FzRLHtmy/Frame-1618871295.png',
      'https://i.postimg.cc/9FD93jLW/Frame-1618871296.png',
      'https://i.postimg.cc/VL2CmHTQ/Frame-1618871300.png',

      'https://i.postimg.cc/qqzNd8x7/Frame-1618871315.png',
      'https://i.postimg.cc/sDbhs0LT/Frame-1618871301.png',
      'https://i.postimg.cc/ydfD5f9d/Frame-1618871314.png',

      'https://i.postimg.cc/Pf3DFqQk/Frame-1618871292.png',
        'https://i.postimg.cc/d3LhK8jM/Frame-1618871311.png',
  

      'https://i.postimg.cc/bNZnXjmY/Frame-1618871297.png',
      'https://i.postimg.cc/R0BJnJ4q/Frame-1618871302.png',
      'https://i.postimg.cc/nLJ9Q9pr/Frame-1618871303.png',

      
      'https://i.postimg.cc/gJcwg9wP/Frame-1618871310.png',
    

      
      'https://i.postimg.cc/44LcF3bS/Frame-1618871293.png',
      'https://i.postimg.cc/SRvzXZxj/Frame-1618871294.png',

      'https://i.postimg.cc/fRX0Lf4r/Frame-1618871298.png',
      'https://i.postimg.cc/qMW34ZFC/Frame-1618871299.png',
      'https://i.postimg.cc/Kz91V9Lk/Frame-1618871312.png',


  'https://i.postimg.cc/tT968ZM8/551739475-17856524808524591-4036319579675361521-n-1.png',



  
 
 
  'https://i.postimg.cc/FHcJRV5v/Frame-1618871304.png',
  'https://i.postimg.cc/FHcJRV5h/Frame-1618871305.png',
  'https://i.postimg.cc/y89Sdy4W/Frame-1618871306.png',
  'https://i.postimg.cc/Qd5WtJGH/Frame-1618871307.png',
  'https://i.postimg.cc/DzT4b4nf/Frame-1618871308.png',
  'https://i.postimg.cc/k5mRtRqB/Frame-1618871309.png',
 


 
];

const GalleryImage: React.FC<{ 
  src: string; 
  index: number; 
  onClick: () => void;
  isBlurred: boolean;
  onMouseEnter: () => void;
}> = ({ src, index, onClick, isBlurred, onMouseEnter }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const containerClasses = [
    'm-1', 'group', 'center', 'transition-all', 'duration-500', 
    'ease-out', 'transform', 'cursor-pointer',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0',
    isBlurred ? 'filter blur-sm scale-95 opacity-60' : ''
  ].join(' ');

  return (
    <div 
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={containerClasses}
      style={{ transitionDelay: `${(index % 2) * 100 + Math.floor(index / 2) * 50}ms` }}
    >
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        className="transition-transform duration-500 ease-in-out aspect-[4/5] group-hover:scale-105"
      />
    </div>
  );
};


const WorkGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleShowNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % imageUrls.length);
    }
  };
  
  const handleShowPrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + imageUrls.length) % imageUrls.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') handleShowNextImage();
      if (e.key === 'ArrowLeft') handleShowPrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    if (selectedImageIndex !== null) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImageIndex]);


  return (
    <section className="bg-white">
      <div 
        className="grid m-2 md:m-16 grid-cols-2 md:grid-cols-3"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {imageUrls.map((url, index) => (
          <GalleryImage 
            key={index} 
            src={url} 
            index={index} 
            onClick={() => handleOpenModal(index)}
            isBlurred={hoveredIndex !== null && hoveredIndex !== index}
            onMouseEnter={() => setHoveredIndex(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div 
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={handleCloseModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
          <style>{`.animate-fade-in { animation: fadeIn 0.3s ease; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[110]"
            aria-label="Close image viewer"
          >
            <CloseIcon className="w-8 h-8" />
          </button>

          <button
            onClick={handleShowPrevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          
          <button
            onClick={handleShowNextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-[110]"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imageUrls[selectedImageIndex]} 
              alt={`Gallery image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <h2 id="modal-title" className="sr-only">Image {selectedImageIndex + 1} of {imageUrls.length}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;