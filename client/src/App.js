import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [name, setName] = useState("");

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

  return (
    <div>
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
    </div>
  );
}

export default App;
