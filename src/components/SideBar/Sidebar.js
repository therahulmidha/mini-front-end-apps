import React, { useState } from "react";
import "./Sidebar.css";
import AppsIcon from "@mui/icons-material/Apps";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { createTheme, IconButton } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
const customTheme = createTheme({
  palette: {
    reactColor: {
      main: "#61DAFB",
    },
  },
});
export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarIconClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={showSidebar ? "show-sidebar sidebar" : "sidebar"}>
      <ThemeProvider theme={customTheme}>
        <IconButton color="reactColor" onClick={handleSidebarIconClick}>
          <AppsIcon fontSize="large" />
        </IconButton>
      </ThemeProvider>
      {showSidebar && (
        // onBlur={handleSidebarIconClick}
        <div className="sidebar-links" >
          {routes.map((route, index) => (
            <Link key={index} to={route.path}>
              {route.name}
            </Link>
          ))}
        </div>
      )}
      {!showSidebar && (
        <div className="sidebar-text">
          <h1>React Mini Apps</h1>
          <p> Click on the Button above to switch apps</p>
        </div>
      )}
    </div>
  );
};
