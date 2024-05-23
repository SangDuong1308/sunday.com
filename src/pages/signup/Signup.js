import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";
import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
    // setEmail("");
    // setPassword("");
    // setDisplayName("");
    // setThumbnail(null);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }

    if (selected.size > 10000000) {
      // corrected the file size limit to 10MB
      setThumbnailError("Selected file must be less than 10MB");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("Thumbnail changed");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
        <input required type="file" onChange={handleFileChange}></input>
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
