import { useState } from "react";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="project-card">
      <div className="project-header">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="tech-list">
        {project.tech.map((item, index) => (
          <span className="tech-tag" key={index}>
            {item}
          </span>
        ))}
      </div>

      <button className="read-more-btn" onClick={handleToggle}>
        {isOpen ? "Show Less" : "Read More"}
      </button>

      {isOpen && (
        <div className="project-details">
          <p>{project.details}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;