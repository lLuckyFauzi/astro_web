import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./layouts/Main";
import IssPage from "./pages/ISS/index";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/issTrackers" element={<IssPage />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
