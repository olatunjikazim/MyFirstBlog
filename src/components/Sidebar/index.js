import React from "react";
import Card from "../UI/Card";
import "./style.css";

/**
 * @author
 * @function Sidebar
 **/

const SideBar = (props) => {
  return (
    <Card style={{ width: "27%", BorderRadius: "20px" }}>
      <img
        src="https://3.bp.blogspot.com/-zlQO0zfYQd8/V9_M2m9Px-I/AAAAAAAAD4o/qucehvSfM-4210-UQCaFPr6hs7NvJdLHQCPcB/w680/2-1.jpg"
        alt="side1"
        className="sidePost1"
      />
    </Card>
  );
};

export default SideBar;
