import React from "react";
import { useState } from "react";
import "./ExpandingCards.css";

const imgSources = [
  "/images/nature/pic1.jpg",
  "/images/nature/pic2.jpeg",
  "/images/nature/pic3.webp",
  "/images/nature/pic4.jpg",
  "/images/nature/pic5.jpg",
];
export const ExpandingCards = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <h1 className="center-vh">Click on the image to enlarge</h1>
      <div className="img-cards center-vh">
        {imgSources.map((src, index) => (
          <div
            key={index}
            className={selectedImageIndex === index ? "panel active" : "panel"}
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => setSelectedImageIndex(index)}
          >
            <h3>Picture #{index + 1}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
