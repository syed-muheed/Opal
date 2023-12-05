import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Component3 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollableDistance =
        aboutRef.current?.clientHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / totalScrollableDistance) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const text = 'Introducing the tadpole,the first ever webcam built';
  const words = text.split(' ');

  const wordSprings = useSpring({
    opacity: inView ? 1 : 0.2,
    config: { tension: 170, friction: 26 },
  });

  return (
    <div ref={aboutRef} className="relative">
      <div ref={ref} className="h-[100vh] lg:h-[100vh] w-full flex justify-center items-center">
        <div className="w-[70vw] max-w-[1500px] text-[1.2rem] md:text-[1.7rem] xl:text-[2.4rem] 2xl:text-[3.8rem] text-brandblack font-gilroy font-medium  text-scroll leading-[2.4rem] sm:leading-[3.3rem] md:leading-[4rem] lg:leading-[5rem] 2xl:leading-[6rem]">
          {words.map((word, index) => (
            <animated.span
              key={index}
              style={{ ...wordSprings, display: 'inline-block', marginRight: '0.5rem' }}
            >
              {word}{' '}
            </animated.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component3;
