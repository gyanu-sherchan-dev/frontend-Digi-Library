import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { updatePassword } from "../helpers/axiosHelpers";

const Profile = () => {
  const [user, setUser] = useState();
  const [showForm, setShowForm] = useState();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = formData;
    console.log(confirmPassword, newPassword);
    if (confirmPassword !== newPassword) {
      return toast.error("Confirm Password and Password do not matched !");
    }
    const { status, message } = await updatePassword({
      currentPassword,
      newPassword,
    });
    toast[status](message);
  };
  return (
    <DashboardLayout>
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current Password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  placeholder="Enter a New Password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your new  Password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="mt-2" variant="info" type="submit">
                Update Password
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <Row className="p-5">
          <Col md={8}>
            <ul>
              <li>
                <strong>Profile ID:</strong> {user?._id}
              </li>
              <li>
                <strong>Name:</strong>
                {`${user?.fName} ${user?.lName}`}
              </li>
              <li>
                <strong>Email: </strong>
                {user?.email}
              </li>
              <li>
                <strong>Status: </strong>
                <span
                  className={
                    user?.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {user?.status}
                </span>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <Button
              variant="dark"
              type="Submit"
              className="d-flex align-items-center"
              onClick={() => setShowForm(true)}
            >
              Update Password
            </Button>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;
