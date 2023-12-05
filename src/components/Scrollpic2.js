import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scrollpic2 = () => {
  const imageRef = useRef(null);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    // Scroll Animation
    ScrollTrigger.create({
      trigger: imageElement,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        // Calculate the progress based on the scroll position
        const progress = self.progress;

        // Toggle images based on the scroll position
        if (progress < 0.5) {
          imageElement.src = '/icon/scrollpic5.webp';
        } else {
          imageElement.src = '/icon/scrollpic6.webp';
        }

        // Update loading bar style based on progress
        const loadingBarElement = loadingBarRef.current;
        loadingBarElement.style.height = `${progress * 170}%`;
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array for componentDidMount behavior

  return (
    <div className='px-[1vh] bg-white pt-[9vh] flex flex-col gap-[5.5vh] lg:hidden'>
      {/* Loading Bar */}

      <div className='text-[12px] pl-[10px] max-w-[250px]'>
        <h1 className='font-bold'>CLIP AND GO.</h1>
        <p className='text-[#a7a5a5]'>THE OPAL TADPOLE WAS MADE TO GO WITH YOU.WRAP IT AROUND YOUR WRIST OR PUT IT IN ITS CASE TO KEEP IT SAFE.</p>
      </div>
      <div className='flex flex-col gap-[10vh]'>
        <div>
          <img className='rounded-[5px]' src='/icon/scrollpic4.webp' alt='Original' />
        </div>
        <div className='relative'>
          <img ref={imageRef} className='rounded-[5px] w-[75%] transition-all duration-[500]' src='/icon/scrollpic5.webp' alt='Changing Image' />
          <div 
          style={{ width: '8px', height: '30%', backgroundColor: '', position:'absolute', top: '30%', right: '28%', zIndex: 9999 }}
          className='rounded-[30px] border-2  border-[#f6f5f5] overflow-hidden'>
          
      <div
        ref={loadingBarRef}
        style={{ width: '4px', height: '0', backgroundColor: 'white', position:'absolute', top: '0', right: '0', zIndex: 9999 }}
        className='rounded-[30px]'
      />
      </div>
        </div>

      </div>
    </div>
  );
};

export default Scrollpic2;
