import React from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { Container, Row, Table } from "react-bootstrap";

const Transactions = () => {
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Book</th>
                <th>Tittle</th>
                <th>Author</th>
                <th>Borrowed By</th>
                <th>Borrowed Date</th>
                <th>Returned Date</th>
              </tr>
            </thead>
          </Table>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Transactions;
