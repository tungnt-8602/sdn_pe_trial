import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button , Image} from "react-bootstrap";
import "../Category/style.css";

const ProductList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const defaultImage = "../logo.svg" 
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9999/api/products/product"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDetail = (id) => {

  }

  return (
    <div className="container">
      <div className="table-name">
        <h1>Product List</h1>
        <Button variant="info" onClick={() => navigate(`/createProduct`)}>
          Add Product
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
                <tr key={e._id} >
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{e.category.name}</td>
                    <td><Image style={{width:'400px'}} src={e.images[0]?.url || defaultImage} rounded /></td>
                </tr>
            )
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
