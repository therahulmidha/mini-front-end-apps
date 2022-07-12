import React, { useState } from "react";
import "./RotatingNavigation.css";

export const RotatingNavigation = () => {
  const [sideBarClicked, setSideBarClicked] = useState(false);
  const clickHandler = () => {
    setSideBarClicked(!sideBarClicked);
  };

  return (
    <div
      className={
        sideBarClicked
          ? "rotating-container rotating-container-clicked"
          : "rotating-container"
      }
    >
      <div className="rotating-sidebar">
        <i
          class={sideBarClicked ? "fa-solid fa-multiply" : "fa-solid fa-bars"}
          onClick={clickHandler}
        ></i>
        {sideBarClicked ? (
          <div className="rotated-nav-options">
            <p>Home</p>
            <p>Articles</p>
            <p>About</p>
          </div>
        ) : null}
      </div>
      <div
        className={
          sideBarClicked ? "rotating-content rotation" : "rotating-content"
        }
      >
        <h1>Natural vegetation of India </h1>
        <p>
          The natural vegetation of India has been growing since last few years.
        </p>
        <img
          src="/images/nature/pic1.jpg"
          alt="nature"
          className="rotate-page-img"
          width="50%"
          height="50%"
        />
        <p className="rotate-description my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          dui blandit, suscipit nisl a, scelerisque tortor. Duis eget ipsum ac
          ipsum commodo vestibulum non eget eros. In pretium eget massa quis
          pellentesque.
        </p>
      </div>
    </div>
  );
};
