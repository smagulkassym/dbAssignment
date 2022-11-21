import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

const NewUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [cname, setCountry] = useState("");

  const handleSubmit = async (e) => {
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
      );
      let res = await axios.post(`http://localhost:5000/api/users`, {
        name: name,
        surname: surname,
        email: email,
        salary: salary,
        phone: phone,
        cname: cname,
      });
      if (res.status === 200) {
        console.log("User created successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    handleClose();
    window.location.reload();
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
              <Form.Control
                type="text"
                placeholder="Billy"
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Herrington"
                required
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="billyherrington@niconico.boy "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary ($)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="300$"
                required
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="870066769"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select
                onChange={(e) => setCountry(e.target.value)}
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
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewUser;
