import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Send a POST request to /post_name endpoint in the backend
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
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default Form;
