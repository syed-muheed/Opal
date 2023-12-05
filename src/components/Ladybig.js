import React from 'react';

const Ladybig = () => {
  const backgroundImageUrl = 'icon/tadtopBig2.webp'; // Replace with the actual path to your image

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'contain', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: '100%',
    height: '190vh', // Adjust as needed
  };

  return (
    <div className='hidden md:block'>

    <div style={containerStyle} className=' bg-no-repeat flex justify-end '>
        <div className='w-[70vh] flex flex-col gap-[10vh]'>
    <div className='px-[2.5vh] pr-[15vh] flex flex-col gap-[3vh] mt-[35vh]'>
        <h2 className="text-[42px] leading-[45px] font-thin">Mirrorless quality,
         <span> </span>
          peerless
           <span className=''> </span>
         reputation.</h2>

         <p className="text-[#a29f9f] text-[13px] pr-[4vh]">Our powerful Sony IMX582 RS sensor combined with our f1.8 six element glass lens produces the truest color you can carry in your pocket.</p>
        </div>

        <div className='px-[2.5vh] flex flex-col gap-[1vh]'>
        <div className='text-[10px] font-bold'>TADPOLE <span className='text-[#ffc400] font-bold'>VS</span> THE WORLD</div>
        <div>
        <video
        src={'/lady.mp4'}
        autoPlay
        loop
        muted
        className=" rounded-[7px]"
      />
        </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Ladybig;
