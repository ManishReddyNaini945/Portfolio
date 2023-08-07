import React, { useState } from "react";
import "./Navbar.css";
import {
  FaBehance,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav>
        <div className="nav-mobile-view">
          <div className="nav-header">
            <h1>Portfolio</h1>
            <button className="nav-toggle" onClick={toggleHandler}>
              <FaBars />
            </button>
          </div>

          <div className={toggle ? "show-container" : "links-container"}>
            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="nav-desktop-view">
          <div className="nav-header">
            <h1>Portfolio</h1>
            <div className="links-container-desktop">
              <ul className="links-desktop">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/project">Projects</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
