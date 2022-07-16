import React from "react";
import "./AnimatedNavigation.css";

export const AnimatedNavigation = () => {
  return (
    <div className="animated-navigation">
      <div></div>
      <div></div>
      <div className="animated-navbar">
        <ul>
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa fa-times"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
