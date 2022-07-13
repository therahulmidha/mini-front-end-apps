import React from "react";
import "./SoundBoard.css";

export const SoundBoard = () => {
  return <div className="sound-board center-vh">
    <button><audio src="/audio/audio1.mp3" type="audio/ogg"></audio></button>
    <button><audio src="/audio/horse.ogv" type="audio/ogg"></audio>horse</button>
    <div>boo</div>
    <div>gasp</div>
    <div>tada</div>
    <div>victory</div>
    <div>wrong</div>
  </div>;
};
