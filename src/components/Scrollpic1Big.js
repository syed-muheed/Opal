import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scrollpic1Big = () => {
  const imageRef = useRef(null);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

   
    ScrollTrigger.create({
      trigger: imageElement,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
       
        const progress = self.progress;

       
        if (progress < 0.5) {
          imageElement.src = '/icon/scrollpic2.webp';
        } else {
          imageElement.src = '/icon/scrollpic3.webp';
        }

        // Update loading bar style based on progress
        const loadingBarElement = loadingBarRef.current;
        loadingBarElement.style.height = `${progress * 170}%`;
      },
    });

  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); 

  return (
    <div className='px-[1vh] lg:px-[3vh] bg-white pt-[27vh] hidden lg:flex flex-col gap-[5.5vh]'>
      {/* Loading Bar */}

      <div className='text-[12px] lg:text-[10px] pl-[95px] max-w-[500px] flex flex-col gap-2 lg:pl-[300px] lg:max-w-[600px]'>
        <h1 className='font-bold'>TEENIE-TINY</h1>
        <p className='text-[#a7a5a5]'>THE TADPOLE IS JUST A TAD TALLER THAN A GUMMY BEAR. IT FITS IN YOUR HAND AND IT CLIPS NICELY ON YOUR LAPTOP DISPLAY.</p>
      </div>
      <div className='flex flex-row-reverse gap-[1vh] w-full'>
        <div className='h-[130vh] w-[55%]'>
          <img className='rounded-[5px] h-full w-full' src='/icon/scrollpic1.webp' alt='Original' />
        </div>
        <div className='relative h-[130vh] w-[30%]'>
        <div className='sticky h-[95vh] w-full top-[2vh]'>
          <img ref={imageRef} className='rounded-[5px] w-full
           h-full transition-all duration-[500]' src='/icon/scrollpic2.webp' alt='Changing Image' />
          <div 
          style={{ width: '5px', height: '20%', backgroundColor: '', position:'absolute', top: '40%', right: '8%', zIndex: 9999 }}
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
    </div>
  );
};

export default Scrollpic1Big;
