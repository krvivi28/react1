import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div id="navbar">
      <div id="logo">
        <img src="img/mylogo.png" alt="codewithbugg" srcset="" />
      </div>
      <div>
        <ul>
          <li className="item">
            <a href="#home">{props.title}</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li className="item">
            <a href="#services-container">{props.course}</a>
          </li>
          <li className="item">
            <a href="#client-section">faculty</a>
          </li>
          <li className="item">
            <a href="#contact">contact</a>
            {/* <Link to="/about">About</Link> */}
          </li>
        </ul>
      </div>
      <label htmlFor="checkbox"d>dark-mode</label>
      <input id="checkbox" type="checkbox" />
    </div>
  );
}
