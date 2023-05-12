import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, fetchAllBooks }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {books.map((book) => {
        return (
          <BookCard key={book._id} book={book} fetchAllBooks={fetchAllBooks} />
        );
      })}
    </div>
  );
};

export default BookList;
