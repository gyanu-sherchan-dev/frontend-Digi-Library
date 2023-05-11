import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    if (u) {
      setUser(u);
    }
  }, []);

  return (
    <div className="dashboard-layout">
      {/* side-bar */}
      <Sidebar currentUser={user} />
      <div className="dashboard-main">
        <Header currentUser={user} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
