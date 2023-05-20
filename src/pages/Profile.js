import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { Button, Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);
  return (
    <DashboardLayout>
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
            <Button variant="dark" className="d-flex align-items-center">
              Update Password
            </Button>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;
