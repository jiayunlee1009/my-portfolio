const projects = [
  {
    id: 1,
    title: "團體健檢預約與管理系統",
    category: "專題製作",
    tech: ["React", "TypeScript", "NestJS", "MySQL"],
    summary: "整合預約、名冊管理與健檢流程的系統開發專題。",
    details:
      "此專題為團體健檢預約與管理系統，包含員工預約前台、業務中心與健檢中心等模組，負責系統分析、前端頁面規劃與前後端串接流程設計。後續可搭配專題海報與系統介紹內容展示。",
  },
  {
    id: 2,
    title: "線上點餐系統",
    category: "學習經歷",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    summary: "具備購物車、訂單送出與查詢功能的前後端整合網站。",
    details:
      "使用 HTML、CSS、JavaScript 與 Node.js（Express）開發線上點餐網站，整合 MySQL 資料庫完成餐點選擇、購物車、訂單送出與訂單查詢功能。",
  },
  {
    id: 3,
    title: "IoT寵物自動餵食機",
    category: "學習經歷",
    tech: ["Arduino", "LinkIt 7697", "ThingSpeak", "Line Notify"],
    summary: "結合感測器、自動投食與雲端監控的 IoT 專題。",
    details:
      "使用 Arduino 與多種感測器設計 IoT 寵物餵食系統，透過伺服馬達控制投食、感測器監測剩餘量，並將資料上傳至 ThingSpeak，同時結合 Line Notify 發送提醒。",
  },
];

export default projects;