import React, { useState } from "react";
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../components/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [filter, setFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  // const projects =

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter changeFilter={changeFilter} />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
