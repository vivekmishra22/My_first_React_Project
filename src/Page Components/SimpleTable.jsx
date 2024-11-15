import React from 'react';
import { Table } from 'react-bootstrap';

function SimpleTable() {
  return (
    <div className="container mt-5">
      <h2>Simple Table Example</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>User</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Robert Brown</td>
            <td>robert.brown@example.com</td>
            <td>Moderator</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SimpleTable;
