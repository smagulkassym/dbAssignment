import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const Main = () => {
  return (
    <>
      <h3 className="d-flex justify-content-center" style={{margin:"20px"}}>DBMed Disease Table</h3>
      <Card style={{ margin: "10px" }} bg={"dark"}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Disease Name</th>
                <th>Pathogen</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default Main;
