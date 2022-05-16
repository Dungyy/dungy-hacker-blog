import React from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="Home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
