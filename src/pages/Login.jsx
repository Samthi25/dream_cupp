import React, { useState } from "react";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="login-bg">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input_field">
            <span className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              type="text"
              required
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Enter your email</label>
          </div>
          <div className="input_field">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              type="password"
              required
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Enter your password</label>
          </div>
          <div className="password_option">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
          <div className="account_option">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
      {/* Ionicons CDN for icons */}
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default Login;