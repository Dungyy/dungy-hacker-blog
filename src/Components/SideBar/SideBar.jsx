import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="/Img/erickmunozTECH.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            corporis neque quasi iure ut veniam reprehenderit voluptas.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Family</li>
            <li className="sidebarListItem">Cyber Security</li>
            <li className="sidebarListItem">Web Development</li>
            <li className="sidebarListItem">Random</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-solid fa-square-envelope"></i>
            <i className="sidebarIcon fa-solid fa-square-phone"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
