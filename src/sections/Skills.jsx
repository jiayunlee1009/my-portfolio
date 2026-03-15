function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      
      <div className="skills-group">
        <div className="skills-card">
          <h3>Frontend</h3>
          <div className="skills-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Vue</span>
          </div>
        </div>

        <div className="skills-card">
          <h3>Backend / Database</h3>
          <div className="skills-tags">
            <span>Java</span>
            <span>C#</span>
            <span>Node.js</span>
            <span>NestJS</span>
            <span>MySQL</span>
            <span>Oracle</span>
          </div>
        </div>

        <div className="skills-card">
          <h3>Other Tools</h3>
          <div className="skills-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Android Studio</span>
            <span>Arduino</span>
            <span>VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;