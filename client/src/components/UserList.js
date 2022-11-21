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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [cname, setCountry] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUsers(response.data);
  };

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${email}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////

  const showM = async (email) => {
    console.log(email);
    const response = await axios.get(
      `http://localhost:5000/api/users/${email}`
    );
    setUser(response.data);
    handleShow();
  };

  const handleEdit = async (event) => {
    try {
      console.log(
        JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          salary: salary,
          phone: phone,
          cname: cname,
        })
      )
      const res = await axios.put(`http://localhost:5000/api/users`, {
        name: name,
        surname: surname,
        email: email,
        salary: salary,
        phone: phone,
        cname: cname,
      }); 
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    handleClose();
    // window.location.reload();
  };

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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.name}
                autoFocus
                required
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.surname}
                required
                onChange={(event) => setSurname(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={user.email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary ($)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                defaultValue={user.salary}
                required
                onChange={(event) => setSalary(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                defaultValue={user.phone}
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select
                defaultValue={user.cname}
                onChange={(event) => setCountry(event.target.value)}
                required
              >
                <option>Choose country</option>
                <option value="Japan">Japan</option>
                <option value="United States">USA</option>
                <option value="China">China</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
