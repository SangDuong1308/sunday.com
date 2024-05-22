import "./Signup.css";

import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <form className="auth-form">
      <h2>Sign up</h2>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        ></input>
      </label>
      <label>
        <span>Profile Thumbnail:</span>
        <input require type="file"></input>
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
}
