import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/videos/anonymous.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Dungy</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius
          voluptatem reprehenderit autem, exercitationem voluptate laboriosam
          facere? Magnam mollitia facilis dolores, quasi laudantium eaque
          obcaecati, nulla, saepe accusamus fugiat magni Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolorum eius voluptatem
          reprehenderit autem, exercitationem voluptate laboriosam facere?
          Magnam mollitia facilis dolores, quasi laudantium eaque obcaecati,
          nulla, saepe accusamus fugiat magni!Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolorum eius voluptatem reprehenderit
          autem, exercitationem voluptate laboriosam facere? Magnam mollitia
          facilis dolores, quasi laudantium eaque obcaecati, nulla, saepe
          accusamus fugiat magni!
        </p>
      </div>
    </div>
  );
}
