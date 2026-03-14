import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="section-description">
        這裡整理了我的專題製作與學習經歷，點擊卡片可查看更多詳細內容。
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;