import React from 'react'

const Last = () => {
    const imageStyle = {
        filter: 'invert(100%)', // Invert the color completely
        maxWidth: '100%', // Adjust the width as needed
      }; 
  return (
    <div className='bg-[#0a0a0a] md:hidden'>
        <div className='bg-[#0a0a0a] border-y-[1px] border-[#333232] px-[1vh] py-[5vh]'>
            <img style={imageStyle} src='/icon/opal2.png'/>
        </div>
        <div className='flex flex-row pt-[5vh] gap-[7vw] h-[50vh] px-[2vh] text-[#b3b2b2] text-[14px]'>
       
        <div className='flex flex-col gap-[2vh] '>
          <div   className='text-[#595858] mix-blend-difference'>Products</div>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ><a>Tadpole</a></li>
            <li className='navbar-list-item' ><a>C1</a></li>
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
      <div className='flex items-center justify-between text-[#b3b2b2] text-[14px] h-[10vh] mx-[2vh] border-t-[1px] border-[#333232]'>
        <div>Opal Camera Inc.</div>
        <div> All rights reserved.</div>
      </div>
    </div>
  )
}

export default Last