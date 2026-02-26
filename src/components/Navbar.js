import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "15px",
  backgroundColor: "#333",
};

export default Navbar;