import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/users`
    );
    setUsers(response.data);
  };

  const deleteUser = async (email) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}api/users/${email}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////

  const showM = async (email) => {
    console.log(email);
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/users/${email}`
    );
    setUser(response.data);
    handleShowEdit();
  };

  const handleNameChange = async (e) => {
    user.name = e.target.value;
  };

  const handleSurnameChange = async (e) => {
    user.surname = e.target.value;
  };

  const handleSalaryChange = async (e) => {
    user.salary = e.target.value;
  };

  const handlePhoneChange = async (e) => {
    user.phone = e.target.value;
  };

  const handleCountryChange = async (e) => {
    user.cname = e.target.value;
  };

  const handleEdit = async () => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}api/users`, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        salary: user.salary,
        phone: user.phone,
        cname: user.cname,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    handleCloseEdit();
    getUsers();
  };

  /////////////////////////////////

  return (
    <>
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
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td id={`email${index}`}>{user.email}</td>
                  <td>{user.salary}</td>
                  <td>{user.phone}</td>
                  <td>{user.cname}</td>
                  <td className="d-flex justify-content-end ">
                    <Button
                      onClick={() => showM(user.email)}
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

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                key={"name" + user.name}
                defaultValue={user.name}
                autoFocus
                required
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                key={"surname" + user.surname}
                defaultValue={user.surname}
                required
                onChange={handleSurnameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                key={"email" + user.email}
                value={user.email}
                required
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary ($)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                key={"salary" + user.email}
                defaultValue={user.salary}
                required
                onChange={handleSalaryChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                key={"phone" + user.email}
                defaultValue={user.phone}
                required
                onChange={handlePhoneChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select
                defaultValue={user.cname}
                key={"country" + user.email}
                onChange={handleCountryChange}
                required
              >
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Japan">Japan</option>
                <option value="United States">USA</option>
                <option value="China">China</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
