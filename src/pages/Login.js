import React from "react";
import Layout from "../component/Layout/Layout";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CustomInputForm from "../component/CustomInput/CustomInputForm";

const Login = () => {
  const inputField = [
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
  ];
  return (
    <div>
      <Layout>
        <Container className="register">
          <div className="reg-content">
            <Row>
              <Col md={6}>
                <div className="reg-form p-5">
                  <h4 className="fw-bold mb-4">Sign In</h4>
                  {inputField.map((item, i) => {
                    return <CustomInputForm key={i} {...item} />;
                  })}
                </div>
              </Col>
              <Col md={6}>
                <div className="reg-img pb-5">
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
