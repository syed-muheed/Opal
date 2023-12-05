import React, { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Component2 = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [isPlay, setPlay] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isPic1, setPic1] = useState(false);
  const [isPic2, setPic2] = useState(false);
  const [isPic3, setPic3] = useState(false);
  const [isPic4, setPic4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 640;
      if (offset > threshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (offset > 900) {
        setPic1(true);
      } else {
        setPic1(false);
      }
      if (offset > 960) {
        setPic2(true);
      } else {
        setPic2(false);
      }
      if (offset > 1200) {
        setPic3(true);
      } else {
        setPic3(false);
      }
      if (offset > 1300) {
        setPic4(true);
      } else {
        setPic4(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const words = containerRef.current.querySelectorAll("span");
    const videos = containerRef.current.querySelectorAll("video");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(words, {
      color: "#ded9ce",
      stagger: 1,
    });

    tl.to(words, {
      color: "#000000",
      stagger: 1,
    });
  }, []);

  return (
    <div
      className={`scrolly-container hidden bg-[#ffffff] h-[170vh] w-full md:flex flex-col gap-[1vh] font-light text-[4.7vw] px-[17vw] justify-center -z-10 sticky pb-[10vh] top-0`}
      ref={containerRef}
    >
      <div>
        <div className="scrolly-content flex flex-row gap-2 ">
          <span>Introducing</span>
          <span>the</span>
          <span>Tadpole</span>
          <video
            className={`video-element ${isPic1 ? "w-[15%]" : "w-[7%]"} ${
              isPic1 ? "opacity-[1]" : "opacity-[0.5]"
            }   object-cover transition-all duration-500 ease-in-out`}
            autoPlay
            muted
            loop
            playsInline
            src={"/scroll1.mp4"}
          />
        </div>

        <div className="scrolly-content flex flex-row gap-2">
          <span>the</span>
          <span>smallest</span>
          <span>Webcam</span>
          <span>ever</span>
          <span>built</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>With</span>
          <video
            className={`video-element ${isPic2 ? "w-[13%]" : "w-[7%]"} ${
              isPic2 ? "opacity-[1]" : "opacity-[0.5]"
            } left-[30vw]  object-cover transition-all duration-500 ease-in-out`}
            autoPlay
            muted
            loop
            playsInline
            src={"/sound-wave.mp4"}
          />
          <span>a</span>
          <span>category-</span>
          <span>first</span>
          <span>directional</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>microphone,</span>
          <span>a</span>
          <span>mirrorless</span>
          <span>Sony</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>sensor,</span>
          <span>and</span>
          <span>the</span>
          <span>easiest</span>
          <span>way</span>
          <span>to</span>
          <span>mute</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>your</span>
          <span>call</span>
          <span>with</span>
          <span>a</span>
          <span>tap</span>
          <video
            className={`video-element ${isPic3 ? "w-[13%]" : "w-[7%]"} ${
              isPic3 ? "opacity-[1]" : "opacity-[0.5]"
            } left-[30vw]  object-cover transition-all duration-500 ease-in-out`}
            autoPlay
            muted
            loop
            playsInline
            src={"/usb-light-blink.mp4"}
          />
          <span>it's</span>
          <span>the</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>perfect</span>
          <span>webcam</span>
          <span>to</span>
          <span>take</span>
          <span>with</span>
          <span>you</span>
        </div>
        <div className="scrolly-content flex flex-row gap-2">
          <span>everywhere</span>
          <video
            className={`video-element ${isPic4 ? "w-[9%]" : "w-[7%]"} ${
              isPic4 ? "opacity-[1]" : "opacity-[0.5]"
            } left-[30vw]  object-cover transition-all duration-500 ease-in-out`}
            autoPlay
            muted
            loop
            playsInline
            src={"/Yoyo.mp4"}
          />
        </div>
      </div>
      <div className="text-[25px]">
        <div className="scrolly-content flex flex-row gap-1">
          <span>And</span>
          <span>now,</span>
          <span>it</span>
          <span>works</span>
          <span>with</span>
          <span>both</span>
        </div>
        <div className="scrolly-content flex flex-row gap-1">
          <img src="/icon/weird.png" className="w-[40px]"></img>
          <span>Mac</span>
          <span>and</span>
          <img src="/icon/windows.png" className="w-[40px]"></img>
          <span>PC</span>
        </div>
      </div>
    </div>
  );
});

export default Component2;
