import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CustomInput from "../component/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/axiosHelpers";
import { toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const inputField = [
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
      placeholder: "John@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "****",
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message, user } = await loginUser(form);

    toast[status](message);

    if (status === "success") {
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate("/books");
    }
  };
  return (
    <div>
      <Layout>
        <Container className="main">
          <div className="login-content">
            <Row>
              <Col md={6}>
                <div className="reg-form p-5  bg-light rounded-3">
                  <Form onSubmit={handleOnSubmit}>
                    <h3 className="mb-4">Welcome to our Library System</h3>
                    <hr />
                    <h4 className="fw-bold mb-4">Sign In</h4>
                    {inputField.map((item, i) => {
                      return (
                        <CustomInput
                          key={i}
                          {...item}
                          onChange={handleOnChange}
                        />
                      );
                    })}
                    <div className="d-grid">
                      <Button className="text-light" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="text-start  mt-3">
                  Do Not have Account! <Link to="/register">Register Now</Link>
                </div>
              </Col>
              <Col md={6} className="d-none d-md-block">
                <div className="login-img pb-5">
                  <img src="../../../assets/DigiLogin.png" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Login;
