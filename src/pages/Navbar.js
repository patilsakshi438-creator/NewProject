import React from "react";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #1e1e2f;
          padding: 15px 40px;
        }

        .logo {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 25px;
          margin: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav-links li a:hover {
          color: #00bcd4;
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">MyApp</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;