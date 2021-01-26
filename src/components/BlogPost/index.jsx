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
      </Card>
    </div>
  );
};

export default BlogPost;
