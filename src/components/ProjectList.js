import { Link } from "react-router-dom";
import "./ProjectList.css";

import React from "react";
import Avatar from "./Avatar";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link
          className="project"
          to={`projects/${project.id}`}
          key={project.id}
        >
          <h4 className="project-name">{project.name}</h4>
          <p className="project-due">
            Due by {project.dueDate.toDate().toDateString()}
          </p>
          <div className="assigned-to">
            <p className="memeber-assigned">
              <strong>Assigned to:</strong>
            </p>
            <ul className="member-list">
              {project.assignedUsersList.map((user) => (
                <li className="member" key={user.id}>
                  <Avatar className="avatar" src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
