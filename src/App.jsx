import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Apply from "./components/Apply";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Chapters from "./components/Chapters";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
