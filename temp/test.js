import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const Test = () => {
  const [user, setUser] = useState([]);

const show = async (email) => {
  const response = await axios.get(`http://localhost:5000/api/users/${email}`);
  setUser(response.data);
  handleShow()
}

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
    );
    let res = await axios.put(`http://localhost:5000/api/users`, {
      name: name,
      surname: surname,
      email: email,
      salary: salary,
      phone: phone,
      cname: cname,
    });
    if (res.status === 200) {
      console.log("User updated successfully");
    } else {
      console.log("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
  handleClose();
  window.location.reload();
}

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
                value={user.name}
                autoFocus
                required
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                value={user.surname}
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
                value={user.salary}
                required
                onChange={(event) => setSalary(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={user.phone}
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Select
                value={user.cname}
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
}
  export default Test;