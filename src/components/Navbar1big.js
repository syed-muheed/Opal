import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar1White from "./Navbar1White";
import clsx from "clsx";

const Navbar1big = () => {
  const myref = useRef(null);
  const [opacity, setopacity] = useState(true);
  const productsRef = useRef([]);
  const companyRef = useRef([]);
  const resourcesRef = useRef([]);
  const productscol = useRef([]);
  const companycol = useRef([]);
  const resourcescol = useRef([]);

  const [diVisible, setDiVisible] = useState(false);

  const handleMouseEnter = () => {
    setDiVisible(!diVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setopacity(true);
      if (offset > 10) {
        setopacity(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to animate Products column
    const animateProducts = () => {
      const productsList = productsRef.current;

      gsap.from(productsList, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(productsList, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
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
        ease: "power2.in",
        onComplete: () => {
          gsap.to(companyList, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
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
        ease: "power2.in",
        onComplete: () => {
          gsap.to(resourcesList, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
          });
        },
      });
    };

    // Call the animation functions
    animateProducts();
    animateCompany();
    animateResources();
  }, [diVisible]);

  return (
    <div>
      <div
        className={clsx(
          "hidden lg:flex fixed h-[40vh] w-[125vh] top-[2px] left-[2px] flex-row px-[1vh] pt-[14px] z-10 text-[grey] text-[13.5px] duration-1000 gap-[12vw] font-semibold rounded-[10px]",
          diVisible ? "bg-white" : ""
        )}
      >
        <div className={clsx(diVisible ? "hidden" : "")}>
          <img src="/icon/opal.png" alt="Opal Logo" />
        </div>
        <div
          className={clsx(
            "w-[62px] pl-[1vh] pt-[1vh] flex flex-col gap-[27vh]",
            diVisible ? "" : "hidden"
          )}
        >
          <img className="w-[90%]" src="/icon/opal2.png" alt="Opal Logo" />
          <img className="w-[50%]" src="/icon/bpacman.png"></img>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseEnter}
          className="flex flex-row pt-[9px] gap-[9vw] "
        >
          <div className="flex flex-col gap-[1vh]">
            <div
              ref={(el) => (productsRef.current[opacity ? 0 : null] = el)}
              className="text-[#ededed] mix-blend-difference "
            >
              Products
            </div>
            <ul
              className={clsx(
                "flex flex-col duration-700 gap-[1vh] navbar-list",
                opacity ? "opacity-100" : "opacity-0",
                diVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <li
                className="navbar-list-item"
                ref={(el) => (productsRef.current[opacity ? 1 : 0] = el)}
              >
                <a>Tadpole</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (productsRef.current[opacity ? 2 : 1] = el)}
              >
                <a>C1</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (productsRef.current[opacity ? 3 : 2] = el)}
              >
                <a>Composer</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[1vh]">
            <h1
              ref={(el) => (companyRef.current[opacity ? 0 : null] = el)}
              className="text-[#dfdede]   mix-blend-difference "
            >
              Company
            </h1>
            <ul
              className={clsx(
                "flex flex-col duration-700 gap-[1vh] navbar-list",
                opacity ? "opacity-100" : "opacity-0",
                diVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <li
                className="navbar-list-item"
                ref={(el) => (companyRef.current[opacity ? 1 : 0] = el)}
              >
                <a>About</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (companyRef.current[opacity ? 2 : 1] = el)}
              >
                <a>Terms</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (companyRef.current[opacity ? 3 : 2] = el)}
              >
                <a>Privacy</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-[1vh]">
            <h1
              ref={(el) => (resourcesRef.current[opacity ? 0 : null] = el)}
              className="text-[#dfdede] mix-blend-difference"
            >
              Resources
            </h1>
            <ul
              className={clsx(
                "flex flex-col duration-700 gap-[1vh] navbar-list",
                opacity ? "opacity-100" : "opacity-0",
                diVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <li
                className="navbar-list-item"
                ref={(el) => (resourcesRef.current[opacity ? 1 : 0] = el)}
              >
                <a>Support</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (resourcesRef.current[opacity ? 2 : 1] = el)}
              >
                <a>Media Kit</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (resourcesRef.current[opacity ? 3 : 2] = el)}
              >
                <a>Downloads</a>
              </li>
              <li
                className="navbar-list-item"
                ref={(el) => (resourcesRef.current[opacity ? 4 : 3] = el)}
              >
                <a>Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1big;
