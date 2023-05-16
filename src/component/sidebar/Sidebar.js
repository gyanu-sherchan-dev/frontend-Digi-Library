import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ currentUser }) => {
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="profile-img "
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <div className="title">MAIN</div>
          <li>
            <Link to="/books" className="link">
              <i className="fa-solid fa-book"></i> <span>All Books</span>
            </Link>
          </li>
          <li>
            <Link to="/books/mybooks" className="link">
              <i className="fa-solid fa-book-open"></i>
              <span>My Books</span>
            </Link>
          </li>

          {currentUser?.role === "teacher" && (
            <>
              <li>
                <Link to="/books/add" className="link">
                  <i className="fa-solid fa-book-medical"></i>
                  <span>Add Book</span>
                </Link>
              </li>
              <li>
                <Link to="/books/transactions" className="link">
                  <i className="fa-solid fa-left-right"></i>{" "}
                  <span>Transactions</span>
                </Link>
              </li>
            </>
          )}

          <p className="title">USER</p>
          <li>
            <Link to="/" className="link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
