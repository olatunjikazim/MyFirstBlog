import React from "react";
import Card from "../UI/Card";
import "./style.css";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is Always Beautiful</h1>
          <span className="postedBy">
            posted on July 21, 2016 by Sora Blogging Tips
          </span>
        </div>
        <div>
          <img
            src="https://1.bp.blogspot.com/-uUyRrF_pZzI/V9_OnN0WMPI/AAAAAAAAD48/GDN9pK1mnuwJvYdO4SoCJ38adB0sMzmLQCLcB/s1600/Special-1.jpg"
            alt="Post Image"
            className="postImageContainer"
          />
        </div>

        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Fitness Mantra To Live Fit Life</h1>
          <span className="postedBy">
            posted onJuly 21, 2016 bySora Blogging Tips
          </span>
          <span className="post1">
            Midst first it, you're multiply divided. There don't, second his one
            given the he one third rule fruit, very. Fill. Seed give firmament
            doesn't land, isn't lesser creeping. Abundantly you called signs
            waters yielding he cattle greater were evenin...
          </span>
        </div>
        <div className="blogImage2">
          <img
            src="https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg"
            alt="Post Image2"
            srcset=""
            className="postImage2"
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
