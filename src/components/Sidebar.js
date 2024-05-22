import { NavLink } from "react-router-dom";
import DashBoardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import "./Sidebar.css";

import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* avatar and username */}
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/" className="side-links">
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
