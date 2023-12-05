import React from 'react'

const Lastbg = () => {
    const backgroundImageUrl = 'icon/lastbg.webp'; // Replace with the actual path to your image

    const containerStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      width: '100%',
      height: '90vh', // Adjust as needed
    };
  
    return (
      
  <div className='flex flex-col md:hidden'>
      <div style={containerStyle} className=' bg-no-repeat '>  
    </div>
    <div className='bg-[#0a0a0a] text-[17.5px] px-[3vh] flex flex-col gap-[5vh] pb-[20vh]'>
        <h1 className='text-[white] text-[40px] font-thin leading-[50px]'>Technical Specifications</h1>
        <div className='text-[#595959] flex flex-col gap-[3vh]'>

            <div >
                <h2 className='text-[#ffbb00]'>Read first.</h2>
                <p>The Tadpole is a feat of engineering. This tiny 3.5 by 4.5 cm unit is a powerful self-contained image capture system, equipped with a category first directional mic, and a mount system able to clip on most laptop displays. Our package comes with</p>
            </div>
            <div>
            a premium woven cable, a wrap-around bead and a capacitive USB-C mute button. This is the most compact, full equipped camera system on the market. And it weights less than 50 grams.
            </div>
        </div>
    </div>
    </div>
  )
}

export default Lastbg