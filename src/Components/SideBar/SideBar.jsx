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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore velit quas, alias inventore ducimus voluptatibus deserunt nobis architecto dolores cumque repellat tenetur, temporibus similique odit accusantium, error omnis aspernatur.
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
            <a href="mailto:erickmunoztech@gmail.com">
              <i className="sidebarIcon TopLeftItem fa-solid fa-square-envelope"></i>
            </a>
            <a href="tel:320-321-4780">
              <i className="sidebarIcon fa-solid fa-square-phone"></i>
            </a>
            <a href="https://twitter.com/CodewithDungy">
              <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/dungy/">
              <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
