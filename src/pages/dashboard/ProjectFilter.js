import React, { useState } from "react";
import "./ProjectFilter.css";

const filterList = [
  "all",
  "mine",
  "maintain",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (filter) => {
    setCurrentFilter(filter);
    changeFilter(filter);
  };

  return (
    <div className="project-filter">
      <nav className="filter-tag">
        <p className="filter-heading">Filter by:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
