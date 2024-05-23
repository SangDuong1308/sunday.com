import "./Create.css";

import React, { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          <span>Project details</span>
          <textarea
            type="text"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Set due date</span>
          <input
            type="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </label>
        <label>
          <span>Project category</span>
        </label>
        <label>
          <span>Assign to:</span>
        </label>
        <button className="btn">Add Project</button>
      </form>
    </div>
  );
}
