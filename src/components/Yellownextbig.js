import React from 'react'

const Yellownextbig = () => {
  const backgroundImageUrl = 'icon/brick.webp'; // Replace with the actual path to your image

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '100vh', // Adjust as needed
  };

  return (
    

    <div style={containerStyle} className=' bg-no-repeat hidden  md:flex  items-end
    '>
      <div className=' h-[58vh] flex flex-col gap-[6vh] pl-[10%]'>
        <h1 className='text-white text-[3.5vw] font-thin w-[60%] leading-[3.5vw]'>Take one home today.
        </h1>
        <p className='text-[#989797] text-[13px] '>Get your Tadpole for $175.</p>
        <div className=' h-[5vh] opacity-[100] w-[15vh] bg-white  font-medium flex justify-center items-center  text-[13px] rounded-[3px] hover:bg-[#ffdb01]'>
           <a href='#' className='text-[black]  '> Order now</a>
        </div>
      </div>
    </div>

    
  )
}

export default Yellownextbig