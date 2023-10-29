import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const AddProduct = () =>{
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [img, setImg] = useState([])
    const [cate, setCate] = useState()
    const [cateList, setCateList] = useState([]);


    const nav = useNavigate()
    console.log(name, price, cate);

    useEffect(() => {
        fetchCateList()
    })

    const fetchCateList = async () => {
        try {
          const response = await axios.get(
            "http://localhost:9999/api/categories/category"
          );
          setCateList(response.data);
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    const handleCreate = async e =>{
        e.preventDefault();
        axios.post('http://localhost:9999/api/products/product', {
            name: name,
            price: price,
            images: img,
            category: cate
          })
          .then(function (response) {
            console.log(response);
          })
          .then(nav(`/`))
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="container">
      <Form onSubmit={handleCreate}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter product name"
          />
          <Form.Control.Feedback type="invalid">
            Please input product name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGroupPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Enter product price"
          />
        </Form.Group>

        <Form.Group controlId="formGroupCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={cate}
            onChange={(e) => setCate(e.target.value)}
            as="select"
            custom
          >
            {cateList.map((e) => (
            <option>{e.name}</option>
          ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
    )
}

export default AddProduct;