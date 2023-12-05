import React,{useRef,useState} from 'react'

const Mutemobile = () => {
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
          className={`scrolling-component relative h-[200vh]  flex flex-col md:hidden  justify-center overflow-hidden transition-transform duration-300 ease-in-out transform  -z-10 border-2 border-[red]`}
        >
           
          <video
          
            ref={videoRef}
            src={'/mutevideomobile.mp4'}
            autoPlay
            muted
            className="responsive-video absolute w-full h-[50%] object-cover top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-9"
            onEnded={handleVideoEnd}
            onTimeUpdate={(e) => setPlayed(e.target.currentTime / e.target.duration)}
          />
          <div className='h-[80vw] w-full'> 
          </div>
          <div className='text-[#eeecec] z-10 px-[2vh] flex flex-col gap-[3vh] '>
          <h2 className='text-[35px] leading-[43px]'>Mute your<br></br> call with<br></br> a single tap.</h2>
          <p className='text-[gray] text-[12px] w-[260px]'>Have you ever wished you could instantly mute yourself in a video call without having to look for that elusive mic button? Well, now you can have it.</p>
          <div className='flex flex-col gap-[0vh]'>
            <img className='w-[270px]' src='/icon/mute.png'/>
            <div className='pl-[13vw] flex flex-col gap-[1vh]'>
            <div  className='font-bold text-[16px]'>Tap To Mute<sup>™</sup></div>
            <p className='text-[gray] text-[12px] '>Touch it or swipe it. Our integrated capacitive <br/>USB-C button can mute your mic instantly.</p>
            </div>
          </div>
          </div>
          </div>
  )
}

export default Mutemobile