import React from "react";

function Admin() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Admin Panel</h2>

        <ul style={styles.menu}>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Schemes</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1>Welcome Admin 👋</h1>
        <p>This is a simple admin dashboard page.</p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div style={styles.card}>
            <h3>Total Schemes</h3>
            <p>45</p>
          </div>

          <div style={styles.card}>
            <h3>Revenue</h3>
            <p>₹25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ Inline CSS */
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "220px",
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
  },

  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },

  content: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f4f6f9",
  },

  cards: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "180px",
    textAlign: "center",
  },
};

export default Admin;