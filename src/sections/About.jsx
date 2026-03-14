function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p className="section-description">
        我是輔仁大學醫學資訊暨創新應用學程學生，關注前端開發、系統分析與資料庫設計，
        也透過課外活動累積舞台技術、教學規劃與活動統籌經驗。
      </p>

      <div className="about-content">
        <div className="about-card">
          <h3>學歷背景</h3>
          <p>
            輔仁大學醫學資訊暨創新應用學程，在校期間參與系統開發、資料庫設計、
            Android APP、IoT 與網頁前後端整合等專題與課程作業。
          </p>
        </div>

        <div className="about-card">
          <h3>個人特色</h3>
          <p>
            具備跨領域學習、自學能力、執行力與團隊合作經驗，能在專案中整合技術實作、
            文件整理與成果展示，並持續優化作品內容。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;