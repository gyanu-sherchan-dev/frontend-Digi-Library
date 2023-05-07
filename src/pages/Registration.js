import React from "react";
import Layout from "../component/Layout/Layout";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CustomInputForm from "../component/CustomInput/CustomInputForm";

const Registration = () => {
  const inputField = [
    {
      label: "First Name",
      name: "fName",
      required: "true",
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "Email",
      name: "email",
      required: "true",
      type: "email",
      placeholder: "John@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      required: "true",
      type: "password",
      placeholder: "****",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: "true",
      type: "password",
      placeholder: "****",
    },
  ];
  return (
    <Layout>
      <Container className="register">
        <div className="reg-content">
          <Row>
            <Col md={6}>
              <div className="reg-img">
                <img src="../../../assets/DigiLibrary.png" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="reg-form p-4">
                <h4 className="fw-bold mb-4">Sign Up</h4>
                {inputField.map((item, i) => {
                  return <CustomInputForm key={i} {...item} />;
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Registration;
