import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { getBooks } from "../helpers/axiosHelpers";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BookList from "../component/books/BookList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const fetchAllBooks = async () => {
    const response = await getBooks();
    setBooks(response.books);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} fetchAllBooks={fetchAllBooks} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
