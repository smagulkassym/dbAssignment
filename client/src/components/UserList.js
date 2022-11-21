import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUser(response.data);
  };

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${email}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ margin: "10px" }} bg={"dark"}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Table striped hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index+1}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.salary}</td>
                <td>{user.phone}</td>
                <td>{user.cname}</td>
                <td className="d-flex justify-content-end ">
                  <Button
                    to={`edit/${user.email}`}
                    variant="warning"
                    style={{ margin: "0.25rem" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteUser(user.email)}
                    variant="danger"
                    style={{ margin: "0.25rem" }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default UserList;
