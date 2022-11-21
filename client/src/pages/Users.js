import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const Users = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <tr>
                <td>1</td>
                <td>Billy</td>
                <td>Herrington</td>
                <td>billyherrington@niconico.boy</td>
                <td>300$</td>
                <td>870066769</td>
                <td>Japan</td>
                <td class="d-flex justify-content-end "><Button variant="warning" style={{margin: "0.25rem"}}>Edit</Button>
                <Button variant="danger" style={{margin: "0.25rem"}}>Delete</Button></td>
              </tr>
            </tbody>
          </Table>
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
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
