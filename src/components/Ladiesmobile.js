import React,{useRef,useState} from 'react'

const Ladiesmobile = () => {
    const videoRef = useRef(null);
    const [played, setPlayed] = useState(0);
    
  
    const handleVideoEnd = () => {
      setPlayed(1);
      videoRef.current.currentTime = videoRef.current.duration - 0.01;
      videoRef.current.pause();
    };

    const gradientStyle = {
        background: 'linear-gradient(to bottom, #000000, #000000)',
    };
  
    return (
      
        <div
       
          id='video'
          style={gradientStyle}
          className={`scrolling-component relative h-[200vh]  flex flex-col gap-[10vh]  md:hidden   overflow-hidden transition-transform duration-300 ease-in-out transform px-[2vh]  -z-10 `}
        >
           
          <video
          
            ref={videoRef}
            src={'ladiesmobile.mp4'}
            autoPlay
           
            muted
            className="responsive-video absolute w-full h-[50%] object-cover top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-9"
            onEnded={handleVideoEnd}
            onTimeUpdate={(e) => setPlayed(e.target.currentTime / e.target.duration)}
          />
          <div className='h-[80vw] w-full'> 
          </div>

          <div className='text-[#eeecec] pt-[5vh] z-10  flex flex-col gap-[3vh] w-[73%]  self-end'>
          <h2 className='text-[32px] leading-[43px]'>Out of sight?<br></br> Out of Mic.</h2>
          <p className='text-[gray] text-[12px] w-[250px] '>A first on any consumer device, our directional VisiMic microphone captures only what the camera can see. By allowing sound waves to pass through a sonic tunnel inside the device, any sound outside the camera’s field of view is not recorded. No noise filtering, just physics.</p>
          </div>
          <div className='flex flex-col gap-[0vh] text-[#eeecec] z-10'>
            <img className='w-[340px]' src='/icon/ladies.png'/>
            <div className='pl-[25vw] flex flex-col gap-[1vh]'>
            <div  className='font-bold text-[16px]'>VisiMic.</div>
            <p className='text-[gray] text-[12px] '>Field of View on a webcam for the first time. Our Mic technology can filter out the loudest background sounds.</p>
            </div>
          </div>
          </div>
  )
}

export default Ladiesmobile