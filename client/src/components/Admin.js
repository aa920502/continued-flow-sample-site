import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AdminTable from "./AdminTable";
import axios from "axios";

function Admin() {
  const [backendData, setBackendData] = useState([{}]);

  // execute once when the page loads, GET /api endpoint and set data, don't need full path here because we set up the proxy
  // Example using fetch
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  // useEfect is a hook that allows you to perform side effects in functional components.
  // no array - runs after first render and after each update that gets made to the component
  // empty array - runs only once during the first render, won't run when any updates happen
  // array with value(s) inside - tracks the value(s) inside and run when the value(s) are changed/affected
  useEffect(() => {
    axios.get("/api").then(function (response) {
      setBackendData(response.data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <AdminTable />
    </div>
  );
}

export default Admin;
