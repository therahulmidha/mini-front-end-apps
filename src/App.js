import "./App.css";
import { Sidebar } from "./components/SideBar/Sidebar";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
