import React from "react";
import {useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import axios from "axios";
// const API = require("../http/userAPI");

// console.log(API.getUsers());

const Main = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    getDiseases();
  }, []);

  const getDiseases = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/diseases`
    );
    setDiseases(response.data);
  };

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
              {diseases.map((disease, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{disease.disease_code}</td>
                  <td>{disease.pathogen}</td>
                  <td>{disease.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default Main;
