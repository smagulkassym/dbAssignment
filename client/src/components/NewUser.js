import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

const NewUser = () => {
  const [showUser, setShowUser] = useState(false);
  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [cname, setCountry] = useState("");

  const handleSubmit = async (e) => {
    if (name == "" || surname == "" || email == "" || salary == "" || phone == "" || cname == ""){
      return;
    }

    try {
      console.log(cname + "aaaaa")
      let res = await axios.post(`${process.env.REACT_APP_API_URL}api/users`, {
        name: name,
        surname: surname,
        email: email,
        salary: salary,
        phone: phone,
        cname: cname,
      });
    } catch (err) {
      console.log(err);
    }
    handleCloseUser();
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
              onClick={handleShowUser}
              style={{ height: "auto", width: "300px" }}
            >
              Add User
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showUser} onHide={handleCloseUser}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                maxLength={29}
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
                maxLength={39}
                type="text"
                placeholder="Herrington"
                required
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                maxLength={59}
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
                maxLength={19}
                type="tel"
                placeholder="870066769"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 needs-validation" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option> Choose Country</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Japan">Japan</option>
                <option value="United States">USA</option>
                <option value="China">China</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUser}>
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
