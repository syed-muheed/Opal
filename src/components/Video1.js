import React, { useRef, useState, useEffect } from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Para from './Para';
import Order from './Order';
import gsap from 'gsap';
import Component2 from './Component2';

const Video1 = () => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(0);
  

  const handleVideoEnd = () => {
    setPlayed(1);
    videoRef.current.currentTime = videoRef.current.duration - 0.01;
    videoRef.current.pause();
  };

  return (
    
      <div
     
        id='video'
        className={`scrolling-component relative h-[100vh] flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out transform  -z-10`}
      >
        <video
        
          ref={videoRef}
          src={process.env.PUBLIC_URL + '/tadpolevideolarge.mp4'}
          autoPlay
          muted
          className="responsive-video absolute w-full h-full object-cover top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
          onEnded={handleVideoEnd}
          onTimeUpdate={(e) => setPlayed(e.target.currentTime / e.target.duration)}
        />
        <Navbar1 />
        
        <Para />
        
      </div>
     
    
  );
};

export default Video1;
