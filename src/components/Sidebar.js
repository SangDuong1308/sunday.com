import { NavLink } from "react-router-dom";
import DashBoardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import "./Sidebar.css";

import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/" className="side-links">
                <img
                  className="side-icon"
                  src={DashBoardIcon}
                  alt="Dashboard Icon"
                />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" className="side-links">
                <img className="side-icon" src={AddIcon} alt="Add icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
