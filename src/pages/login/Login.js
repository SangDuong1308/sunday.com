import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          autocomplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
