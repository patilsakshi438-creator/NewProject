import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      setMessage("Login Successful ✅");
    } else {
      setMessage("Invalid Email or Password ❌");
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={titleStyle}>Welcome Back 👋</h2>
        <p style={subtitleStyle}>Please login to your account</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Login
        </button>

        <div style={extraLinks}>
          <span style={linkStyle}>Forgot Password?</span>
          <span style={linkStyle}>Create Account</span>
        </div>

        {message && <p style={messageStyle}>{message}</p>}
      </form>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #4CAF50, #2E8B57)",
};

const formStyle = {
  backgroundColor: "#ffffff",
  padding: "35px",
  width: "320px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const titleStyle = {
  marginBottom: "5px",
};

const subtitleStyle = {
  fontSize: "14px",
  color: "gray",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px",
  transition: "0.3s",
};

const extraLinks = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
  fontSize: "13px",
  color: "#4CAF50",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "underline",
};

const messageStyle = {
  marginTop: "15px",
  fontWeight: "bold",
};

export default Login;