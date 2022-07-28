import React, { useEffect } from "react";
import "./AnimatedNavigation.css";

export const AnimatedNavigation = () => {
  useEffect(() => {
    const navBarLinks = document.getElementsByClassName("open-nav-link");
    const navBar = document.getElementById("a-navbar");
    document.getElementsByClassName("always-open-nav-link")[0].addEventListener("click", () => {
      Array.from(navBarLinks).forEach(link => link.classList.toggle('closed-nav-link'))
      navBar.classList.toggle("animated-navbar-closed")
    })
  }, [])
  return (
    <div className="animated-navigation">
      <div></div>
      <div></div>
      <div className="animated-navbar" id="a-navbar">
        <ul>
          <li className="always-open-nav-link"><i className="fa-solid fa-bars a-options"></i></li>
          <li className="open-nav-link">Home</li>
          <li className="open-nav-link">Works</li>
          <li className="open-nav-link">About</li>
          <li className="open-nav-link">Contact</li>
        </ul>
      </div>
    </div>
  );
};
