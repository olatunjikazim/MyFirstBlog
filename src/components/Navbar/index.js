import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };

  return (
    <div className="navbar">
      <ul className="navMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Post">Post</NavLink>
        </li>
        <li>
          <NavLink to="about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>

      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className="searchInput" placeholder="Search" />
          <img src="../../assets/icons/newseaech.png" alt="search" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
