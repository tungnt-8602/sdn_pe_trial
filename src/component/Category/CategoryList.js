import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import "./style.css";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9999/api/categories/category"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="table-name">
        <h1>Category List</h1>
        <Button variant="info" onClick={() => navigate(`/createCategory`)}>
          Add Category
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e._id}>
              <td>{e.name}</td>
              <td>{e.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryList;
