import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { Button, Container, Row, Table } from "react-bootstrap";
import { getBorrowedBooks, returnBook } from "../helpers/axiosHelpers";
import { toast } from "react-toastify";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const fetchBorrowedBooks = async () => {
    const response = await getBorrowedBooks();
    setBooks(response);
  };

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const handleReturn = async (bookId) => {
    if (window.confirm("Are you sure you want to return this book")) {
      const { status, message } = await returnBook(bookId);
      console.log(status, message, bookId);
      status === "success"
        ? toast.success(message) && fetchBorrowedBooks()
        : toast.error(message);
    }
  };
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <Table stripped="true" bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => {
                return (
                  <tr key={book._id} className="text-center">
                    <td>{i + 1}</td>
                    <td style={{ width: "20%" }}>
                      <img
                        style={{ width: "40%" }}
                        src={book?.thumbnail}
                        alt=""
                      />
                    </td>
                    <td>{book?.title}</td>
                    <td>{book?.author}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleReturn(book._id)}
                      >
                        Return Book
                      </Button>
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

export default MyBooks;
