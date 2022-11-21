import axios from "axios";
import React,{ useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import UserList from "../components/UserList";

const NewUser = () => {
  const [users, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [cname, setCountry] = useState("");

  const createUser = async (name, surname, email, salary, phone, cname) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/users`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
    handleClose
  };

  return (
    <>
     <Card style={{ margin: "10px" }}>
        <Card.Body className=" d-flex justify-content-center align-items-center">
          <div>
            <p>Press the button below to create a New User!</p>
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ height: "auto", width: "300px" }}
            >
              Add User
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Billy" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Herrington" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="billyherrington@niconico.boy "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary ($)</Form.Label>
              <Form.Control type="number" min="0" placeholder="300$" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="870066769" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select>
                <option>Choose country</option>
                <option value="1">Japan</option>
                <option value="2">USA</option>
                <option value="3">China</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createUser()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewUser;
