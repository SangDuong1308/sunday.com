import "./Navbar.css";
import Temple from "../assets/temple.svg";

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout, error, isPending } = useLogout();

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
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Loging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
