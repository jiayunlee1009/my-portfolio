const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <img
          src="/assets/profile/avatar.jpg"
          alt="profile"
          className="hero-avatar"
        />

        <h1 className="hero-name">
          李佳芸
        </h1>

        <h2 className="hero-english">
          CHIA-YUN-LI
        </h2>


        <p className="hero-description">
          資訊與醫療跨領域背景，專注於 Web 系統開發與資料庫設計，
          目前持續學習 React、NestJS 與系統架構設計。
        </p>

      </div>

    </section>
  );
};

export default Hero;
