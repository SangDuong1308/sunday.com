import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";
import "./OnlineUsers.css";

import React from "react";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2 className="users-heading">All users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <span>{user.displayName}</span>
            <Avatar className="avatar" src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
