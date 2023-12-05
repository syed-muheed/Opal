import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';

const Navbar1White = () => {
  const productsRef = useRef([]);
  const companyRef = useRef([]);
  const resourcesRef = useRef([]);
  

  useEffect(() => {
    // Function to animate Products column
    const animateProducts = () => {
      const productsList = productsRef.current;

      gsap.from(productsList, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(productsList, {
            opacity: 1,
            y:0,
            stagger:0.1
          });
        },
      });
    };

    // Function to animate Company column
    const animateCompany = () => {
      const companyList = companyRef.current;

      gsap.from(companyList, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(companyList, {
            opacity: 1,
            y:0,
            stagger:0.1
          });
        },
      });
    };

    // Function to animate Resources column
    const animateResources = () => {
      const resourcesList = resourcesRef.current;

      gsap.from(resourcesList, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(resourcesList, {
            opacity: 1,
        y: 0,
        stagger:0.1

          });
        },
      });
    };

    // Call the animation functions
    animateProducts();
    animateCompany();
    animateResources();
  }, []);

  return (
    <div className='flex fixed top-[16px] left-[12px] flex-row z-10 text-[grey] text-[13.5px] gap-[12vw] font-semibold bg-white'>
      <div className='w-[50px]'>
        <img src='/icon/opal2.png' alt='Opal Logo' />
      </div>
      <div className='flex flex-row pt-[9px] gap-[9vw] border-2 border-red-900'>
       
        <div className='flex flex-col gap-[1vh]'>
          <div  ref={(el) => (productsRef.current[0] = el)} className='text-[black] mix-blend-difference '>Products</div>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ref={(el) => (productsRef.current[1] = el)}><a>Tadpole</a></li>
            <li className='navbar-list-item' ref={(el) => (productsRef.current[2] = el)}><a>C1</a></li>
            <li className='navbar-list-item' ref={(el) => (productsRef.current[3] = el)}><a>Composer</a></li>
          </ul>
        </div>

       
        <div className='flex flex-col gap-[1vh]'>
          <h1 ref={(el) => (companyRef.current[0] = el)} className='text-[black]  mix-blend-difference '>Company</h1>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ref={(el) => (companyRef.current[1] = el)}><a>About</a></li>
            <li className='navbar-list-item' ref={(el) => (companyRef.current[2] = el)}><a>Terms</a></li>
            <li className='navbar-list-item' ref={(el) => (companyRef.current[3] = el)}><a>Privacy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className='flex flex-col gap-[1vh]'>
          <h1 ref={(el) => (resourcesRef.current[0] = el)} className='text-[black] mix-blend-difference'>Resources</h1>
          <ul className='flex flex-col gap-[1vh] navbar-list'>
            <li className='navbar-list-item' ref={(el) => (resourcesRef.current[1] = el)}><a>Support</a></li>
            <li className='navbar-list-item' ref={(el) => (resourcesRef.current[2] = el)}><a>Media Kit</a></li>
            <li className='navbar-list-item' ref={(el) => (resourcesRef.current[3] = el)}><a>Downloads</a></li>
            <li className='navbar-list-item' ref={(el) => (resourcesRef.current[4] = el)}><a>Newsletter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar1White;
