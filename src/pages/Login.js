import React from "react";
import Layout from "../component/Layout/Layout";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CustomInput from "../component/CustomInput/CustomInput";

const Login = () => {
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
  return (
    <div>
      <Layout>
        <Container className="register">
          <div className="reg-content">
            <Row>
              <Col md={6}>
                <div className="reg-form p-5  bg-light rounded-3">
                  <Form>
                    <h3 className="mb-4">Welcome to our Library System</h3>
                    <hr />
                    <h4 className="fw-bold mb-4">Sign In</h4>
                    {inputField.map((item, i) => {
                      return <CustomInput key={i} {...item} />;
                    })}
                    <div className="d-grid">
                      <Button className="text-light" type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="text-start  mt-3">
                  Do Not have Account! <a href="/register">Register Now</a>
                </div>
              </Col>
              <Col md={6} className="d-none d-md-block">
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
