import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import Sementic from "./ex01-app/ex01.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sementic />
  </StrictMode>
);
