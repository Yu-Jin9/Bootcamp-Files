import React from "react";
import ReactDOM from "react-dom/client"; // client: FSR server:SSR(next.js)
import App from "./App12"; // 내가 render할 파일을 가져오기

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
