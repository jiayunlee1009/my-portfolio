function Hero() {
  return (
    <section className="hero">
      <p className="hero-subtitle">Portfolio Website</p>
      <h1>你的名字</h1>
      <p className="hero-description">
        輔仁大學醫學資訊暨創新應用學程學生，關注前端開發、系統分析、
        資料庫設計與作品展示，並持續累積跨領域實作與活動統籌經驗。
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-btn primary-btn">
          查看作品
        </a>
        <a href="#contact" className="hero-btn secondary-btn">
          聯絡方式
        </a>
      </div>
    </section>
  );
}

export default Hero;