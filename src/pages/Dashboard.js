import React from "react";

function Dashboard() {
  return (
    <>
      <style>{`
        .dashboard-container {
          padding: 40px;
          text-align: center;
          background-color: #f4f6f8;
          min-height: 100vh;
        }

        .dashboard-title {
          margin-bottom: 40px;
          color: #333;
        }

        .dashboard-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .card {
          background-color: white;
          width: 200px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }

        .card h3 {
          margin-bottom: 10px;
          color: #4CAF50;
        }

        .card p {
          font-size: 20px;
          font-weight: bold;
        }

        .card:hover {
          transform: translateY(-5px);
     }
      `}</style>

      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome to Dashboard 🎉</h1>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Total Sales</h3>
            <p>₹50,000</p>
          </div>

          <div className="card">
            <h3>Active Orders</h3>
            <p>35</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;