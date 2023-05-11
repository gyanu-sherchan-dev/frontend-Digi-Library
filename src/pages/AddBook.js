import React, { useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import Col from "react-bootstrap/Col";
import { Button, Container, Form } from "react-bootstrap";

const initialState = {
  title: "",
  author: "",
  year: "",
  isbn: "",
  thumbnail: "",
};

const AddBook = () => {
  const [formData, setFormData] = useState(initialState);
  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <DashboardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add Book</h1>
        </div>
        <Container>
          <div className="add-bottom">
            <Col md={5} className="d-none d-sm-block">
              <div className="book-img">
                <img
                  src="https://m.media-amazon.com/images/P/B071CT7S7M.01._SCLZZZZZZZ_SX500_.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={5} sm={12}>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder="Book Title"
                    required
                    type="text"
                    name="title"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    placeholder="Author"
                    required
                    type="text"
                    name="author"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    placeholder="ISBN"
                    required
                    type="text"
                    name="isbn"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Year Published</Form.Label>
                  <Form.Control
                    placeholder="Year"
                    required
                    type="number"
                    name="year"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Thumbnail</Form.Label>
                  <Form.Control
                    placeholder="Book Image URL"
                    required
                    type="text"
                    name="thumbnail"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="info" type="submit">
                  Add Book
                </Button>
              </Form>
            </Col>
          </div>
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default AddBook;
