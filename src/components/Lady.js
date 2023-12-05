import React from 'react'

const Lady = () => {
  return (
    <div className=' bg-white pt-[50vh] flex flex-col gap-[5vh] md:hidden'>
        <div className='px-[2.5vh] pr-[11vh] flex flex-col gap-[3vh]'>
        <h2 className="text-[33px] leading-[37px] font-thin">Mirrorless quality,
         <span> </span>
          peerless
           <span className=''> </span>
         reputation.</h2>

         <p className="text-[#c9c5c5] text-[12px]">Our powerful Sony IMX582 RS sensor combined with our f1.8 six element glass lens produces the truest color you can carry in your pocket.</p>
        </div>

        <div className='px-[2.5vh] flex flex-col gap-[1vh]'>
        <div className='text-[12px] font-bold'>TADPOLE <span className='text-[#ffc400] font-bold'>VS</span> THE WORLD</div>
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
        <div className='pt-[4vh]'>
        <img className='' src='/icon/tadtop.webp' alt='Original' />
        </div>

    </div>
  )
}

export default Lady