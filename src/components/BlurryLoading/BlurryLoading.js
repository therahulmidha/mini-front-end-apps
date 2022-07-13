import React, { useEffect, useState } from "react";
import "./BlurryLoading.css";

export const BlurryLoading = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(counter + 1), 50);
    }
  }, [counter]);
  return (
    <div className="blurry-loading-container">
      <img src="/images/nature/pic1.jpg" alt="bg" />
      <h1>{counter >= 100 ? "" : counter + "%"}</h1>
    </div>
  );
};
