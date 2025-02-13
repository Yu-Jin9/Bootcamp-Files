import "./App.css";
import Home from "./pages/Home/Home";
import Fastfood from "./pages/Fastfood/FastfoodMain";
import FastfoodSearch from "./pages/Fastfood/FastfoodSearch";
import FastfoodChoice from "./pages/Fastfood/FastfoodChoice";
import Menu from "./pages/Fastfood/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Router 추가 */}
      <div className="max-w-2xl m-auto h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fastfood" element={<Fastfood />} />
          <Route path="/fastfood-search" element={<FastfoodSearch />} />
          <Route path="/fastfood-choice" element={<FastfoodChoice />} />
          <Route path="/menu" element={<Menu />} />
          {/* 경로 수정 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
