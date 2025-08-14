// components/main/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/Infinite_Cosmic_Journey_Video_Ready.mp4" type="video/mp4" />
      </video>

      {/* Purple Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{ backgroundColor: "rgba(13, 0, 31, 0.60)" }}
      ></div>
    </>
  );
};

export default Hero;
