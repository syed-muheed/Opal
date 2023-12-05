import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Colorchangeinview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameCount = 321;
    const images = Array.from({ length: frameCount }, (_, i) => `/downloaded_images/tp_white_${(432000 + i).toString().padStart(6, '0')}.webp`);
    const imageElement = containerRef.current;

    const updateImage = () => {
      const scroll = ScrollTrigger.getById('trigger');
      const progress = (scroll.progress - scroll.start) / (scroll.end - scroll.start);
      const index = Math.round(progress * (images.length - 1));
      imageElement.src = images[index];
    };

    gsap.to(imageElement, {
      scrollTrigger: {
        trigger: containerRef.current,
        id: 'trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      onUpdate: updateImage,
    });

    // Initial update to set the initial image
    updateImage();
  }, []);

  return (
    <div ref={containerRef} className='h-[100vh] srol'>
      <img src="/downloaded_images/tp_white_432000.webp" alt="Image" />
      {/* Add your other content here */}
    </div>
  );
};

export default Colorchangeinview;

