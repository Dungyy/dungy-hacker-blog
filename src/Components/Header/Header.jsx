import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderTitles">
        <span className="HeaderTitleSmall">React & Node</span>
        <span className="HeaderTitleLarge"> Blog</span>
      </div>
      <video
        className="HeaderImg"
        src="/videos/intro-hacking-video.mp4" autoPlay loop muted />
    </div>
  );
};

export default Header;
