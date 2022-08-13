import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [name, setName] = useState("");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // execute once when the page loads, GET /api endpoint and set data, don't need full path here because we set up the proxy
  // Example using fetch
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("/api").then(function (response) {
      setBackendData(response.data);
    });
  }, []);

  // Send a POST request to /post_name endpoint, this can be used for lead form submission
  async function postName(e) {
    e.preventDefault();
    try {
      await axios.post("/post_name", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const registered = {
      fullName: fullName,
      username: username,
      email: email,
    };
    try {
      await axios
        .post("/signup", registered)
        .then((response) =>
          console.log("sending registration data: " + response.data)
        );
    } catch (error) {
      console.log(error);
    }
    setFullName("");
    setUsername("");
    setEmail("");
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
      <div>
        <form onSubmit={postName}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Send Name</button>
        </form>
      </div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control form-group"
            ></input>

            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="submit"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
