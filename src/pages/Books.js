import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/Layout/DashboardLayout";
import { getBooks } from "../helpers/axiosHelpers";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BookList from "../component/books/BookList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  const fetchAllBooks = async () => {
    const response = await getBooks();
    setBooks(response.books);
  };

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user")); //we can get the user from sessionStorage directly in BookCard.js and as per the user role display the delete button or not, here we are just doing the props drilling.
    setUser(u);
    fetchAllBooks();
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} fetchAllBooks={fetchAllBooks} user={user} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
