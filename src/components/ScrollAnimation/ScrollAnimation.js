import { useRef } from "react";
import "./ScrollAnimation.css";

export const ScrollAnimation = () => {
  const boxRef = useRef();

  const onScrollHandler = (event) => {
    // using divs already there in the parent div (hidden via translateX)
    const triggerBottom = (window.innerHeight / 5) * 4;
    Array.from(boxRef.current.children).forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("blue-box-show");
      } else {
        box.classList.remove("blue-box-show");
      }
    });

    // Using Removal and addition of divs
    // if (event.deltaY > 0) {
    //   console.log("scrolling down");
    //   const newNode = document.createElement(`div`);
    //   newNode.className = "blue-box blue-box-new";
    //   boxRef.current.appendChild(newNode);
    // } else if (event.deltaY < 0) {
    //   if (!boxRef.current.children.length) {
    //     return;
    //   }
    //   console.log("scrolling up");
    //   boxRef.current.removeChild(boxRef.current.lastChild);
    // }
  };

  return (
    <div className="box-scroll" onWheel={onScrollHandler}>
      <h3> Move the scroll bar to see animation</h3>
      <div className="box-area" ref={boxRef}>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
        <div className="blue-box"></div>
      </div>
    </div>
  );
};
