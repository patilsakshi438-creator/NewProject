import React from "react";

function Home() {
  return (
    <>
      <style>{`
        .home-container {
          text-align: center;
          padding-top: 100px;
          min-height: 100vh;
          background: linear-gradient(to right, #4CAF50, #2E8B57);
          color: white;
        }

        .home-title {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .home-subtitle {
          font-size: 18px;
          margin-bottom: 30px;
        }

        .home-button {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          background-color: white;
          color: #4CAF50;
          cursor: pointer;
          transition: 0.3s;
        }

        .home-button:hover {
          background-color: #f1f1f1;
        }
      `}</style>

      <div className="home-container">
        <h1 className="home-title">Welcome to Home Page 🎉</h1>
        <p className="home-subtitle">
          This is a simple React Home Page with styling.
        </p>

        <button className="home-button">Get Started</button>
      </div>
    </>
  );
}

export default Home;