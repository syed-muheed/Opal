import React from 'react'

const Lastbig = () => {
    const imageStyle = {
        filter: 'invert(100%)', // Invert the color completely
        maxWidth: '100%', // Adjust the width as needed
      }; 
  return (
    <div className='bg-[#0a0a0a] relative h-[150vh]'>
        <div className='bg-[#0a0a0a] border-t-[1px] border-[#333232] px-[2vh] py-[5vh]'>
            <img style={imageStyle} src='/icon/opal2.png'/>
        </div>
        <div className='flex flex-row pt-[5vh] gap-[6vw] h-[50vh]  text-[#b3b2b2] text-[13px] absolute bottom-[5%] w-[40vw] right-[2%] border-t-[1px] border-[#333232]'>
       
        <div className='flex flex-col gap-[2vh] '>
          <div   className='text-[#595858] mix-blend-difference'>Products</div>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ><a>Tadpole</a></li>
            <li className='navbar-list-item' ><a>Opal C1</a></li>
            <li className='navbar-list-item' ><a>Composer</a></li>
          </ul>
        </div>

       
        <div className='flex flex-col gap-[2vh]'>
          <h1  className='text-[#595858]   mix-blend-difference '>Company</h1>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ><a>About</a></li>
            <li className='navbar-list-item' ><a>Terms</a></li>
            <li className='navbar-list-item' ><a>Privacy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className='flex flex-col gap-[2vh]'>
          <h1 className='text-[#595858] mix-blend-difference'>Resources</h1>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ><a>Support</a></li>
            <li className='navbar-list-item' ><a>Media Kit</a></li>
            <li className='navbar-list-item' ><a>Downloads</a></li>
            <li className='navbar-list-item' ><a>Newsletter</a></li>
          </ul>
        </div>
        <div className='flex flex-col gap-[2vh]'>
          <h1 className='text-[#595858] mix-blend-difference'>Social</h1>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ><a>Instagram</a></li>
            <li className='navbar-list-item' ><a>Twitter</a></li>
           
          </ul>
        </div>
      </div>
      <div className='absolute bottom-0 left-[2%] border-t-[1px] border-[#333232] w-[30vw]'>
        <div className='flex flex-col gap-[4.5vh] h-[47vh]'>
        <div className='text-[#f6f4f4] text-[20px] w-[150px]'>Subscribe to the Opal Newsletter</div>
        <div className='text-[#848282] text-[13px] w-[230px]'>Latest news, musings, announcements and updates direct to your inbox.</div>
        <div className='bg-[#fbfafa] h-[6vh] w-[17vh] rounded-full flex items-center justify-end px-[2vh] hover:bg-[#ffbb00] hover:px-[6vh] transition-all ease-in duration-300'><svg width={"35px"} height={"35px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
        </div>
      <div className='flex items-center justify-between text-[#b3b2b2] text-[14px] h-[10vh] mx-[2vh] border-t-[1px] border-[#333232]'>
        <div>Opal Camera Inc.</div>
        <div> All rights reserved.</div>
      </div>
      </div>
    </div>
  )
}

export default Lastbig