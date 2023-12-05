import React, { useRef, useState } from "react";

const Mute = () => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(0);

  const handleVideoEnd = () => {
    setPlayed(1);
    videoRef.current.currentTime = videoRef.current.duration - 0.01;
    videoRef.current.pause();
  };

  const gradientStyle = {
    background: "linear-gradient(to bottom, #1a1a21, #000000)",
  };

  return (
    <div
      id="video"
      style={gradientStyle}
      className={`scrolling-component relative h-[150vh] hidden  md:flex flex-col gap-[6vh] overflow-hidden transition-transform duration-300 ease-in-out transform  -z-10 `}
    >
      <video
        ref={videoRef}
        src={"/mutevideo.mp4"}
        autoPlay
        muted
        className="responsive-video absolute w-full h-[75%] object-cover top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
        onEnded={handleVideoEnd}
        onTimeUpdate={(e) =>
          setPlayed(e.target.currentTime / e.target.duration)
        }
      />
      <div className="text-[#eeecec] z-10  flex flex-col gap-[3vh] pl-[8vw] pt-[27vh] h-[60vh] ">
        <h2 className="text-[38px] leading-[43px]">
          Mute your<br></br> call with<br></br> a single tap.
        </h2>
        <p className="text-[gray] text-[13px] w-[350px]">
          Have you ever wished you could instantly mute yourself in a video call
          without having to look for that elusive mic button? Well, now you can
          have it.
        </p>
      </div>
      <div className="flex flex-col gap-[7vh] text-[#eeecec] z-10 pl-[4vw]">
        <img className="w-[20%]" src="/icon/mute.png" />
        <div className="pl-[5vw] flex flex-col gap-[1vh]">
          <div className="font-bold text-[12px]">
            Tap To Mute<sup>™</sup>
          </div>
          <p className="text-[gray] text-[10px] ">
            Touch it or swipe it. Our integrated capacitive <br />
            USB-C button can mute your mic instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mute;
