
import { useState, useEffect } from 'react';

export const useParallax = (speed: number) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = {
    transform: `translateY(${offsetY * speed}px)`,
  };

  return style;
};
