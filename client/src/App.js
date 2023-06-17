import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import ConnectedTestComponent from "./components/TestPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<ConnectedTestComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
