import React, { useEffect, useState } from "react";
import "./IncrementingCounters.css";

export const IncrementingCounters = () => {
  const [counts, setCounts] = useState({
    twitter: 0,
    youtube: 0,
    facebook: 0,
  });

  useEffect(() => {
    let newCounts = {};
    if (counts.twitter < 12000) {
      newCounts.twitter = counts.twitter + 40;
    }

    if (counts.youtube < 5000) {
      newCounts.youtube = counts.youtube + 20;
    }

    if (counts.facebook < 7500) {
      newCounts.facebook = counts.facebook + 30;
    }

    if (Object.keys(newCounts)) {
      setTimeout(() => {
        setCounts((prevState) => {
          return {
            ...prevState,
            ...newCounts,
          };
        });
      }, 1);
    }
  }, [counts]);

  return (
    <div className="inc-counters center-vh">
      <div className="counter-wrapper">
        <i className="fa-brands fa-twitter fa-2xl"></i>
        <h1>{counts.twitter}</h1>
        <h5>Twitter Followers</h5>
      </div>
      <div className="counter-wrapper">
        <i className="fa-brands fa-youtube fa-2xl"></i>
        <h1>{counts.youtube}</h1>
        <h5>Youtube Subscribers</h5>
      </div>
      <div className="counter-wrapper">
        <i className="fa-brands fa-facebook fa-2xl"></i>
        <h1>{counts.facebook}</h1>
        <h5>Facebook Fans</h5>
      </div>
    </div>
  );
};
