import React from 'react'

const Svg3 = () => {
    const backgroundImageUrl = 'icon/svg2.png'; // Replace with the actual path to your image

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '600px',
    height: '60vh', // Adjust as needed
  };

  return (
    <div className='bg-[#0a0a0a] text-[#595959] pt-[15vh]  md:hidden pb-[10vh]'>
        <div className='text-[13px] relative overflow-hidden'>
            
            <div className='bg-[#333232] h-[1px] w-full '></div>
            <div style={containerStyle} className='absolute w-full h-[60vh] object-cover top-[18%] left-[50%] -translate-x-1/2 -translate-y-1/2   '>    
                    </div>
                    <div className='h-[70vh]'></div>
               <div className='flex flex-col justify-center gap-[3vh] h-[20vh] px-[2vh]'>
                <div className='text-[33px] text-[white]  flex h-[10vh] items-center'>
                    Microphone
                </div>
                <div className=' text-[15px]'>
                Our microphone sensor is a novel design inspired by the physics behind the smallest auditory systems in nature - insects. Tadpole’s directional MEMS transducer in such a way that it can provide a high-performing dipole response in an ultra-compact form factor.
                </div>
               </div>
            <div className='pt-[10vh] px-[2vh]'>
                
                <div className='flex justify-between items-center  h-[6vh]'>
                    <div>Type</div>
                    <div>MEMS Directional Mic</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-b-[1px] border-[#333232] border-t-[1px] '>
                    <div>Directionality</div>
                    <div className=' '>20 Hz - 20 kHz</div>
                </div>
                <div className='flex justify-between items-center h-[6vh]'>
                    <div>Diffuse noise rejection</div>
                    <div>4.8 dB full-spectrum</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-y-[1px] border-[#333232]'>
                    <div>Noise rejection at the null</div>
                    <div>"{'>'}20 dB"</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-y-[1px] border-[#333232]'>
                    <div>SNR</div>
                    <div>63.5 dBA</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-y-[1px] border-[#333232]'>
                    <div>THD</div>
                    <div>1% at 111 dB SPL</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-y-[1px] border-[#333232]'>
                    <div>Current consumption</div>
                    <div>685 µA</div>
                </div>
                <div className='flex justify-between items-center h-[6vh] border-y-[1px] border-[#333232]'>
                    <div>Output</div>
                    <div>PDM</div>
                </div>
                
            </div>
            
           
           
        </div>
    </div>
  )
}



export default Svg3