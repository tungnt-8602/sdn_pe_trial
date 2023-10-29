import axios from "axios";
import { event } from "jquery";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddCategory = () => {
  const [name, setName] = useState();
  const [des, setDes] = useState();
  const nav = useNavigate();
  console.log(name, des);

  const handleCreate = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:9999/api/categories/category", {
        name: name,
        description: des,
      })
      .then(function (response) {
        console.log(response);
      })
      .then(nav(`/`))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form onSubmit={handleCreate}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter category name"
          />
          <Form.Control.Feedback type="invalid">
            Please input category name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={des}
            onChange={(e) => setDes(e.target.value)}
            type="text"
            placeholder="Enter category description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddCategory;
