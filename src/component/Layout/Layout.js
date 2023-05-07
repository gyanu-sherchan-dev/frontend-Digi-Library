import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="children">{children}</div>
      <footer className="footer">
        <p>All right &copy; reserved by Gyanu || 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
