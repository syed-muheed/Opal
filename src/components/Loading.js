import React, { useState, useEffect } from "react";
import clsx from "clsx";

const LoadingScreen = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [Loaded, setLoaded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 20);

    // Clear interval and hide the loading screen after 1 second (1000 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
      // Hide the loading screen here (e.g., by updating state or using CSS)
      setLoaded(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={clsx(
        "bg-[#201f1f] h-[100vh] flex justify-center items-center",
        Loaded ? "" : "hidden"
      )}
      style={{ textAlign: "center", paddingTop: "20vh" }}
    >
      <img
        src={`/icon/svg${currentImage}.png`} // Replace with your image sources
        alt={`Loading ${currentImage}`}
        style={{ height: "200px", borderRadius: "10%" }}
      />
    </div>
  );
};

export default LoadingScreen;
