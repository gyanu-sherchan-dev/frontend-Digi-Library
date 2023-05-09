import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CustomInput from "../component/CustomInput/CustomInput";
import { postNewUser } from "../helpers/axiosHelpers";
import { toast } from "react-toastify";

const Registration = () => {
  const [form, setForm] = useState({});
  const inputField = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      type: "text",
      placeholder: "John Doe",
    },
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
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      placeholder: "****",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not matched");
    }
    const { status, message } = await postNewUser(rest); //passing rest will prevent sending confirmPassword to server.
    toast[status](message);
  };
  return (
    <Layout>
      <Container className="register">
        <div className="reg-content">
          <Row>
            <Col md={6} className="d-none d-md-block">
              <div className="reg-img pt-2">
                <img src="../../../assets/DigiLibrary.png" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="reg-form pb-4">
                <Form onSubmit={handleOnSubmit}>
                  <h4 className="fw-bold mb-3">Sign Up</h4>
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
                      Register
                    </Button>
                  </div>
                </Form>
                <div className="text-end  mt-3">
                  Already have an account ! <a href="/">Login Now</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Registration;
