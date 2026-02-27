import React from "react";

function Header() {
  return (
    <>
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #282c34;
          padding: 15px 30px;
        }

        .logo {
          color: white;
          margin: 0;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-size: 16px;
        }

        .nav-links li a:hover {
          color: #61dafb;
        }
      `}</style>

      <header className="header">
        <h1 className="logo">My Website</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;