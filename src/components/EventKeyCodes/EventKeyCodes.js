import React, { useState } from "react";
import "./EventKeyCodes.css";

export const EventKeyCodes = () => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [keyStates, setKeyStates] = useState({
    key: "",
    keyCode: "",
    code: ""
  });
  const keyDownHandler = (e) => {
    setKeyPressed(true);
    setKeyStates((prevState) => {
      return {
        ...prevState,
        key: e.key,
        keyCode: e.keyCode,
        code: e.code
      }
    })
  }
  
  // If you want to listen to the onKeyDown event on a <div>, you must set the tabIndex attribute.
  // This attribute indicates whether or not the < div > element can be focused.
  return <div className="key-code-container center-vh" tabIndex="0" onKeyDown={keyDownHandler} >
    {!keyPressed ? <h1>Press any key to get the key code</h1> :
      <div className="event-code-data center-vh">
        <div><p>event.key</p><p className="center-vh">{keyStates.key}</p></div>
        <div><p>event.keyCode</p><p className="center-vh">{keyStates.keyCode}</p></div>
        <div><p>event.code</p><p className="center-vh">{keyStates.code}</p></div>
      </div>
    }
  </div>;
};
