import React, { useRef, useState } from "react";
import "./HiddenSearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

export const HiddenSearchBar = () => {
  const [clicked, setClicked] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    setClicked(!clicked);
    ref.current.focus();
  };
  
  return (
    <div className="search-container center-vh-col">
      <div className="hidden-search-bar">
        <div id="search-div">
          <input
            placeholder="Search"
            ref={ref}
            className={clicked ? "search-input-clicked" : "search-input"}
          />
          <SearchIcon onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
