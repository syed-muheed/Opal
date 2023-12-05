import React from 'react'

const Yellownext = () => {
  const backgroundImageUrl = 'icon/brickmobile.webp'; // Replace with the actual path to your image

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '100vh', // Adjust as needed
  };

  return (
    

    <div style={containerStyle} className=' bg-no-repeat flex items-end md:hidden '>
      <div className='w-[100%] h-[30vh] flex flex-col gap-[2.5vh]'>
        <h1 className='text-white text-[32px] font-thin text-center'>Take one home today.
        </h1>
        <p className='text-[#989797] text-[16px] text-center'>Get your Tadpole for $175.</p>
      </div>
    </div>

    
  )
}

export default Yellownext