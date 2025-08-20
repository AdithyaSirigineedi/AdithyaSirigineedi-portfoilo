import React from "react";
import '../css/scroll.css';

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-button" onClick={handleScroll}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <span className="scroll-text">Scroll</span>
    </div>
  );
};

export default ScrollButton;
