import React from "react";
import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    deleteDocument(project.id);
    navigate("/");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="project-title">{project.name}</h2>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-user">
          {project.assignedUsersList.map((user) => (
            <div key={user.id} className="member-icon">
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}
