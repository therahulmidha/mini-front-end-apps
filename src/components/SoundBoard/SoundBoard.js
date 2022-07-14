import React, { useState } from "react";
import "./SoundBoard.css";

const AUDIOS = [
  "/audio/audio1.mp3",
  "/audio/audio2.ogv",
  "/audio/audio3.mp3",
  "/audio/audio4.mp3",
]
export const SoundBoard = () => {
  const [prevPlayingIndex, setPrevPlayingIndex] = useState(0);

  const playMusic = (index) => {
    const soundBoardDiv = document.getElementsByClassName("sound-board")[0];
    soundBoardDiv.children[prevPlayingIndex].firstChild.pause();
    soundBoardDiv.children[prevPlayingIndex].firstChild.currentTime = 0;
    soundBoardDiv.children[index].firstChild.play();
    setPrevPlayingIndex(index);
  }
  return <div className="sound-board center-vh">
    {AUDIOS.map((audioSrc, index) => (
      <button key={index} onClick={() => playMusic(index)}><audio src={audioSrc} type="audio"></audio>{index}</button>
    ))}
  </div>;
};
