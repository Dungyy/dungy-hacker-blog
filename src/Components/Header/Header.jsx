import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <video
        src="/videos/intro-hacking-video.mp4"
        autoPlay
        loop
        muted
      />
      {/* <img src="/videos/anonymous.jpg" alt="" /> */}
      <div className="HeaderTitles">
        <span className="HeaderTitleSmall">Dungy's</span>
        <span className="HeaderTitleLarge">Blog</span>
      </div>
      
    </div>
  );
};

export default Header;
