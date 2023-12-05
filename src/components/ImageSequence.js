import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = () => {
  const containerRef = useRef(null);
  const [start, setStart] = useState(0);
  const {
    ref: Ref,
    inView,
    entry,
  } = useInView({
    threshold: 0.1,
  });
  console.log(inView);

  useEffect(() => {
    const images = Array.from(
      { length: 321 },
      (_, i) =>
        `/downloaded_images/tp_white_${(432000 + i)
          .toString()
          .padStart(6, "0")}.webp`
    );
    const imageElement = containerRef.current.querySelector("img");

    const defaultImageSrc = "/downloaded_images/tp_white_432000.webp";
    imageElement.src = defaultImageSrc;

    const updateImage = () => {
      const scrollPosition = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the trigger start point based on the height of the viewport
      const startTrigger =
        (containerTop - windowHeight + containerHeight) * 0.9;

      // Progress is calculated from when the container comes into view
      const progress = Math.max(
        0,
        (scrollPosition - startTrigger) / containerHeight
      );

      const index = Math.round(progress * (images.length - 1));
      if (index > images.length - 1) {
        imageElement.src = "/downloaded_images/tp_white_432320.webp";
      } else {
        imageElement.src = images[index];
      }
    };

    const handleScroll = () => {
      if (inView === true) {
        updateImage();
      }
    };

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      onUpdate: updateImage,
    });

    // Initial update to set the initial image
    updateImage();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={Ref}>
      <div
        ref={containerRef}
        className="h-[80vh] srol lg:h-full flex items-center justify-center lg:w-[100%]"
      >
        <img
          src="/downloaded_images/tp_white_432000.webp"
          className="w-[100%]  duration-20 md:w-[75%] lg:w-[100%]"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default ImageSequence;
