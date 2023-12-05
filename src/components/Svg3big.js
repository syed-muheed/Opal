import React from 'react'

const Svg3big = () => {
    

  return (
    <div className='bg-[#0a0a0a] text-[#595959] pt-[5vh] hidden md:block h-[120vh]'>
        <div className='text-[13px]  flex items-center justify-center'>
            
            
            <div className='w-[63%] flex items-center justify-center'>    
                <img className='w-[100%]' src='/icon/svg2.png'/>
                    </div>
                    
               <div className='flex flex-col justify-center gap-[2vh] h-[20vh] px-[2vh] w-[37%]'>
                <div className='text-[33px] text-[white]  flex h-[10vh] items-center'>
                    Microphone
                </div>
                <div className=' text-[13px] pr-[8vh]'>
                Our microphone sensor is a novel design inspired by the physics behind the smallest auditory systems in nature - insects. Tadpole’s directional MEMS transducer in such a way that it can provide a high-performing dipole response in an ultra-compact form factor.
                </div>
            <div className='pt-[5vh] '>
                
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
    </div>
  )
}



export default Svg3big