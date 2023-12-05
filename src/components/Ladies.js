import React,{useRef,useState} from 'react'

const Ladies = () => {
    const videoRef = useRef(null);
    const [played, setPlayed] = useState(0);
    
  
    const handleVideoEnd = () => {
      setPlayed(1);
      videoRef.current.currentTime = videoRef.current.duration - 0.01;
      videoRef.current.pause();
    };

    const gradientStyle = {
        background: 'linear-gradient(to bottom, #0b0a0e, #000000)',
    };
  
    return (
      
        <div
       
          id='video'
          style={gradientStyle}
          className={`scrolling-component relative h-[150vh] hidden  md:flex flex-col items-end gap-[10vh] overflow-hidden transition-transform duration-300 ease-in-out transform  -z-10 `}
        >
          <video
          
            ref={videoRef}
            src={'/ladies.mp4'}
            autoPlay
            muted
            className="responsive-video absolute w-full h-[75%] object-cover top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
            onEnded={handleVideoEnd}
            onTimeUpdate={(e) => setPlayed(e.target.currentTime / e.target.duration)}
          />
          <div className='text-[#eeecec] z-10  flex flex-col gap-[4vh] pr-[10vw] pt-[30vh] h-[60vh] '>
          <h2 className='text-[40px] leading-[43px]'>Out of sight?<br></br> Out of Mic.</h2>
          <p className='text-[gray] text-[12px] w-[300px]'>A first on any consumer device, our directional VisiMic microphone captures only what the camera can see. By allowing sound waves to pass through a sonic tunnel inside the device, any sound outside the camera’s field of view is not recorded. No noise filtering, just physics.</p>
          </div>
          <div className='flex flex-col gap-[7vh] text-[#eeecec] z-10 w-[500px]'>
            <img className='w-[65%]' src='/icon/ladies.png'/>
            <div className='pl-[5vw] flex flex-col gap-[1vh] w-[250px]'>
            <div  className='font-bold text-[12px]'>VisiMic.</div>
            <p className='text-[gray] text-[10px] '>Field of View on a webcam for the first time. Our Mic technology can filter out the loudest background sounds.</p>
            </div>
          </div>
          </div>
  )
}

export default Ladies