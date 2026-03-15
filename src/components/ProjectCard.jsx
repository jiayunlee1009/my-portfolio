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

            <div className="project-highlights">
            <h4>作品重點</h4>
            <ul>
                {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
                ))}
            </ul>
            </div>

            {project.poster && (
            <div className="project-media-block">
                <h4>專案海報</h4>
                <img src={project.poster} className="project-poster" />
            </div>
            )}

            {project.gallery.length > 0 && (
            <div className="project-media-block">
                <h4>作品畫面</h4>
                <div className="project-gallery">
                {project.gallery.map((img, index) => (
                    <img key={index} src={img} className="project-gallery-image" />
                ))}
                </div>
            </div>
            )}

            {project.videoLink && (
            <div className="project-media-block">
                <h4>作品影片</h4>

                {project.videoLink.includes("drive.google.com") ? (
                 <div className="project-external-link">
        <a href={project.videoLink} target="_blank" rel="noreferrer">
          前往觀看影片
        </a>
      </div>
    ) : (
      <video className="project-video" controls>
        <source src={project.videoLink} type="video/mp4" />
        您的瀏覽器不支援影片播放
      </video>
    )}
  </div>
            )}

            <div className="project-links">

            {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                點擊前往網頁
                </a>
            )}

            {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub
                </a>
            )}

            {project.pdfLinks &&
                project.pdfLinks.map((pdf, index) => (
                    <a key={index} href={pdf.url} target="_blank" rel="noreferrer">
                    {pdf.label}
                    </a>
                ))}


            </div>

        </div>
        )}

            </div>
        );
        }

export default ProjectCard;