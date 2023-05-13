import React from "react";
import "./App.scss";
import Registration from "./pages/Registration";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import MyBooks from "./pages/MyBooks";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/mybooks" element={<MyBooks />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
