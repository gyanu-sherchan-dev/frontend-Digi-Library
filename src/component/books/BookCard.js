import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { borrowBooks, deleteBooks } from "../../helpers/axiosHelpers";
import { toast } from "react-toastify";

const BookCard = ({ book, fetchAllBooks }) => {
  const handleBorrow = async (bookId) => {
    if (bookId) {
      const { status, message } = await borrowBooks(bookId);
      status === "success" ? toast.success(message) : toast.warning(message);
    }
  };

  const handleDelete = async (bookId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this book from the system"
      )
    ) {
      if (bookId) {
        const { status, message } = await deleteBooks(bookId);
        console.log(bookId, status, message);
        toast[status](message) && fetchAllBooks();
      }
    }
  };
  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Img
        src={book?.thumbnail}
        style={{ width: "55%", margin: "0.8rem auto" }}
      ></Card.Img>
      <Card.Body className="text-center">
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="info" onClick={() => handleBorrow(book._id)}>
            Borrow
          </Button>
          <Button variant="danger" onClick={() => handleDelete(book._id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
