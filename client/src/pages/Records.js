import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const Records = () => {
    return (
      <>
      <h3 class="d-flex justify-content-center" style={{margin:"20px"}}>DBMed Disease Records</h3>
      <Card style={{ margin: "10px" }} bg={"dark"}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Disease Name</th>
                <th>Country</th>
                <th>Deaths</th>
                <th>Total Patients</th>
                <th>Reported by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Tuberculosis</td>
                <td>France</td>
                <td>54778	</td>
                <td>147988</td>
                <td>Joann@mail.com</td>
                			
              </tr>

            </tbody>
          </Table>{" "}
        </Card.Body>
      </Card>
    </>
    );
};

export default Records;