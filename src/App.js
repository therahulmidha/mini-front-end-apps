import "./App.css";
import { Sidebar } from "./components/SideBar/Sidebar";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Sidebar  />
      <div className="main-content">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
