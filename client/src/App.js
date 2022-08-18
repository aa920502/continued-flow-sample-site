import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tutorial from "./components/Tutorial";
import Admin from "./components/Admin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
