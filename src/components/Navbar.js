import "./Navbar.css";
import Temple from "../assets/temple.svg";

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to="/" className="nav-link">
            <img
              className="nav-icon"
              width="36"
              height="36"
              src="https://img.icons8.com/badges/36/adventures.png"
              alt="adventures"
            />
            <span>sunday.com</span>
          </Link>
        </li>
        {!user && (
          <>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li style={{ marginRight: "20px" }}>Hello {user.displayName}</li>
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
          </>
        )}
      </ul>
    </div>
  );
}
