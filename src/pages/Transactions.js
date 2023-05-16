import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { Container, Row, Table } from "react-bootstrap";
import { getAllTransactions } from "../helpers/axiosHelpers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const result = await getAllTransactions();
    setTransactions(result);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

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
            <tbody>
              {transactions.map((item, i) => {
                return (
                  <tr key={item._id} className="text-center">
                    <td>{i + 1}</td>
                    <td style={{ width: "15%" }}>
                      <img
                        src={item.borrowedBook.thumbnail}
                        alt=""
                        style={{ width: "40%" }}
                      />
                    </td>
                    <td>{item.borrowedBook.title}</td>
                    <td>{item.borrowedBook.author}</td>
                    <td>{item.borrowedBy.userName}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td
                      className={
                        item.returnDate ? "text-success" : "text-danger"
                      }
                    >
                      {item.returnDate
                        ? new Date(item.returnDate).toLocaleDateString()
                        : "Not returned yet"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Transactions;
