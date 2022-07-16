import React, { useRef, useState } from "react";
import "./RandomChoicePicker.css";

export const RandomChoicePicker = () => {
  const [choices, setChoices] = useState([]);
  const choicesRef = useRef();
  const onChangeHandler = (e) => {
    const text = e.target.value;
    if (text === "") {
      setChoices((prevState) => {
        return [];
      });
      choicesRef.current.innerHTML = "";
    }
    if (!text.includes(",")) {
      return;
    }
    const words = text.split(",");
    const lastWord = words[words.length - 2];
    if (choices.includes(lastWord)) {
      return;
    }
    if (lastWord.trim() !== "") {
      const newChoice = document.createElement("p");
      newChoice.className = "picked-choice";
      newChoice.innerHTML = lastWord;
      choicesRef.current.appendChild(newChoice);
      setChoices((prevState) => {
        return [...prevState, lastWord];
      });
    }
  };

  function showAnimation() {
    for (let i = 0; i < 3; i++) {
      Array.from(choicesRef.current.children).forEach((child, index) => {
        child.style.backgroundColor = "#f0932b";
        child.style.animation = `choiceBlink 0.5s linear ${index * 0.1}s`;
      });
      const random = Math.floor(
        Math.random() * choicesRef.current.children.length
      );
      console.log("random", random);
      choicesRef.current.children[random].style.backgroundColor = "darkblue";
    }
  }

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      showAnimation();
    }
  };

  return (
    <div className="center-vh-col choices-container">
      <p>
        Enter all of the choices divided by a comma (',').
        <br />
        Press enter when you're done
      </p>
      <textarea onChange={onChangeHandler} onKeyDown={keyDownHandler} />
      <div className="picked-choices" ref={choicesRef}>
      </div>
    </div>
  );
};
