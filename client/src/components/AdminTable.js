import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function AdminTable() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    axios.get("/records").then(function (response) {
      setBackendData(response.data);
    });
  }, []);

  var i = 0;
  var rows = backendData.map(function (user, index) {
    return (
      <tr key={index}>
        <td>{user._id}</td>
        <td>{user.fullName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.city}</td>
        <td>{user.street}</td>
        <td>{user.zipcode}</td>
      </tr>
    );
  });

  return (
    <div className="w3-container w3-content  w3-padding-64">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Street</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default AdminTable;
