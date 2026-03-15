import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const majorProjects = projects.filter(
    (project) => project.category === "專題製作"
  );

  const learningProjects = projects.filter(
    (project) => project.category === "學習經歷"
  );

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="section-description">
        展示專題製作與學習經歷的專案作品，點擊Read More可查看作品介紹及成果展示。
      </p>

      <div className="project-category-block">
        <h3 className="project-group-title">專題製作</h3>
        <div className="projects-grid">
          {majorProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="project-category-block">
        <h3 className="project-group-title">學習經歷</h3>
        <div className="projects-grid">
          {learningProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;