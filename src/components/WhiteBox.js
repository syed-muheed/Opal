import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

const WhiteBox = () => {
    const whiteRef=useRef([])


    useEffect(()=>{
        const animateWhite=()=>{
            const whiteList=whiteRef.current

            gsap.from(whiteList,{
                opacity:0,
                y:15,
                stagger:0.2,
                duration:0.5,
                ease:'power2.in',
                onComplete:()=>{
                    gsap.to(whiteList,{
                        opacity:1,
                    y:0,
                stagger:0.2,
                duration:0.5,
                    })
                }
            })
        }
        animateWhite()
    },[])

  return (
    <div className='fixed bg-white top-[4px] right-[4px] hidden lg:grid grid-rows-2 z-10 h-[21.5vh] w-[33.5vw] px-3 rounded-[8px] '>
        <div id='w1' className='flex flex-row items-center justify-between border-b-[1px]  border-[#d1cece]'>
            <div className=''>
                <img src='/icon/bpacman.png'></img>
            </div>
            <div className='flex justify-center text-[13.5px] font-medium  items-center text-white bg-black h-[6vh] w-[32vh] rounded-[3px] hover:bg-[#ecec26] hover:text-black'>
                <a href='#'>Buy now</a>
            </div>
        </div>
        <div id='w2' className='flex flex-row items-center justify-between'>
            <div ref={(el)=>(whiteRef.current[0]=el)} className='text-[20px] font-semibold text-[#0f0e0e]'>Tadpole</div>
            <div>
                <ul className='flex flex-row font-bold text-[13.5px] text-[#2d2d2d] gap-[8vh] w-[30vh]'>
                    <li ref={(el)=>(whiteRef.current[1]=el)}><a href='#'>Overview</a></li>
                    <li ref={(el)=>(whiteRef.current[2]=el)}><a href='#'>Tech Specs</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WhiteBox