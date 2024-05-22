import "./Navbar.css";
import Temple from "../assets/temple.svg";

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/badges/36/adventures.png"
            alt="adventures"
          />
          <span>sunday.com</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
