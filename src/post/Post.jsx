import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.pixelstalk.net/wp-content/uploads/images6/Hacker-HD-Wallpaper-4K-Desktop.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Cyber</span>
          <span className="postCat"> Security</span>
        </div>
        <span className="postTitle">This is a Post Title</span>
        {/* <hr /> */}
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        consequuntur mollitia, officiis neque molestiae officia quidem dolorem
        vel. Consequuntur laborumLorem, ipsum dolor sit amet consectetur
        adipisicing elit. Repudiandae consequuntur mollitia, officiis neque
        molestiae officia quidem dolorem vel. Consequuntur laborumLorem, ipsum
        dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur
        mollitia, officiis neque molestiae officia quidem dolorem vel.
        Consequuntur laborumLorem, ipsum dolor sit amet consectetur adipisicing
        elit. Repudiandae consequuntur mollitia, officiis neque molestiae
        officia quidem dolorem vel. Consequuntur laborum
      </p>
    </div>
  );
}
