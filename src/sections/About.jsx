function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p className="section-description">
        我是輔仁大學醫學資訊與創新應用學程學生，具備醫療資訊與系統開發的跨領域背景，主要投入前後端開發、資料庫設計與系統分析。
        除課程與專題外，也透過社團與校園活動培養第二技能，從中培養教學、溝通與活動統籌能力。
      </p>

      <div className="about-content">
        <div className="about-card">
          <h3>學歷</h3>
          <p>
            天主教輔仁大學 醫學資訊與創新應用學程 大三
          </p>
        </div>

        <div className="about-card">
          <h3>個人特色</h3>
          <p>
            具備跨領域學習、自學能力，善於利用工具解決問題，具備溝同協調與團隊合作的經驗。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;