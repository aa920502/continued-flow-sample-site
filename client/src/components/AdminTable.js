import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";

function AdminTable() {

    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        axios.get("/users").then(function (response) {
            setBackendData(response.data);
        });
    }, []);

    var i = 0;
    var rows = backendData.map(function(user,index) {
        return (<tr key = {index}>
            <td>{i++}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>)
    });

    return (
        <div className="w3-container w3-content  w3-padding-64">
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
        </div>
    );
}

export default AdminTable;
