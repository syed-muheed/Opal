import React, { useEffect, useRef,useState } from 'react';
import { forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Component2Phone = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  

  useEffect(() => {
    const words = containerRef.current.querySelectorAll('span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    
       
      },
    });

    tl.from(words, {
      color: '#ded9ce',
      stagger: 8,
    });

    tl.to(words, {
      color: '#000000',
      stagger: 8,
    });
  }, []);

  return (
    <div
      className={`scrolly-container bg-[#ffffff] h-[105vh] w-full flex sticky top-0 flex-col px-5 gap-[2vh]  justify-center text-[25px] md:hidden font-normal  -z-10`}
      ref={containerRef}
    >
        <div className='flex flex-row flex-wrap'>
     <div className="scrolly-content flex flex-row gap-2 ">
        <span>Introducing</span>
        <span>the</span>
        <span>Tadpole</span>
        
      </div>

      <div className="scrolly-content flex flex-row gap-2">
        <span>The</span>
        <span>smallest</span>
        <span>Webcam</span>
        <span>ever</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>built</span>
        <span>With</span>
        <span>a</span>
        <span>category-</span>
        <span>first</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>directional</span>
        <span>microphone,</span>
        <span>a</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>mirrorless</span>
        <span>Sony</span>
        <span>sensor,</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>and</span>
        <span>the</span>
        <span>easiest</span>
        <span>way</span>
        <span>to</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>mute</span>
        <span>your</span>
        <span>call</span>
        <span>with</span>
        <span>a</span>
        <span>tap,</span>
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        <span>it's</span>
        <span>the</span>
        <span>perfect</span>
        <span>webcam</span>
        <span>to</span>
        
      </div>
      <div className="scrolly-content flex flex-row gap-2">
        
        <span>take</span>
        <span>with</span>
        <span>you</span>
        <span>everywhere</span>
      </div>
      </div>
      <div className='text-[17px]'>
        <div className="scrolly-content flex flex-row gap-1">
      <span>And</span>
        <span>now,</span>
        <span>it</span>
        <span>works</span>
        <span>with</span>
        <span>both</span>
        </div>
        <div className="scrolly-content flex flex-row gap-1">
            <img src='/icon/weird.png' className='w-[40px]'></img>
      <span>Mac</span>
        <span>and</span>
            <img src='/icon/windows.png' className='w-[40px]'></img>
        <span>PC</span>
        
        </div>
      </div>
    </div>
  );
});

export default Component2Phone;
