import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function FormSection() {
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
    <div className="w3-container w3-content w3-center w3-padding-64">
      <RegistrationForm />
    </div>
  );
}

export default FormSection;
