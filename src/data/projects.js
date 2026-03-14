const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    id: 1,
    title: "團體健檢預約與管理系統",
    category: "專題製作",
    tech: ["React", "TypeScript", "NestJS", "MySQL"],
    summary: "整合預約、名冊管理與健檢流程的系統開發專題。",
    details:
      "此專題為團體健檢預約與管理系統，包含員工預約前台、業務中心與健檢中心等模組，規劃團體資料、名冊、預約流程與健檢場次管理。",
    highlights: [
      "整合員工預約、團體名冊與健檢流程管理",
      "規劃前台、業務中心與健檢中心多角色操作流程",
      "使用 React、TypeScript、NestJS 與 MySQL 建構系統架構",
    ],
    poster: asset("assets/projects/health-system/poster.png"),
    gallery: [],
    videoLink: asset("assets/projects/health-system/health-system-demo.mov"),
    demoLink: "",
    githubLink: "https://github.com/Kathy1155/group-health-check.git",
  },
  {
    id: 2,
    title: "線上點餐系統",
    category: "學習經歷",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    summary: "具備購物車、訂單送出與查詢功能的前後端整合網站。",
    details:
      "使用 HTML、CSS、JavaScript 與 Node.js（Express）開發線上點餐網站，整合 MySQL 資料庫完成餐點選擇、購物車、訂單送出與訂單查詢功能。",
    highlights: [
      "實作購物車與訂單送出流程",
      "串接 MySQL 資料庫儲存訂單資料",
      "具備訂單查詢功能，完成前後端整合練習",
    ],
    poster: "",
    gallery: [],
    videoLink: "",
    demoLink: "https://jiayunlee1009.github.io/breakfast-order-system-1.1/",
    githubLink: "",
  },
  {
    id: 6,
    title: "IoT 寵物自動餵食機",
    category: "學習經歷",
    tech: ["Arduino", "LinkIt 7697", "ThingSpeak", "Line Notify"],
    summary: "結合感測器、自動投食與雲端監控的 IoT 專題。",
    details:
      "使用 Arduino 與多種感測器設計 IoT 寵物餵食系統，透過伺服馬達控制投食、感測器監測剩餘量，並將資料上傳至 ThingSpeak，同時結合 Line Notify 發送提醒。",
    highlights: [
      "透過伺服馬達控制自動投食",
      "結合光感測器與超音波感測器監測狀態",
      "串接 ThingSpeak 與 Line Notify 實作遠端提醒",
    ],
    poster: "",
    gallery: [
      asset("assets/projects/pet-feeder/pet-feeder-teamwork1.jpg"),
      asset("assets/projects/pet-feeder/pet-feeder-teamwork2.jpg"),
      asset("assets/projects/pet-feeder/pet-feeder-teamwork3.jpg"),
    ],
    videoLink: asset("assets/projects/pet-feeder/pet-feeder-demo.mp4"),
    demoLink: "",
    githubLink: "",
  },

  {
    id: 3,
    title: "美食輪盤 APP",
    category: "學習經歷",
    tech: ["Kotlin", "Android Studio"],
    summary: "以 Android 為平台開發的餐點隨機選擇 APP。",
    details:
      "使用 Kotlin 於 Android Studio 開發 Android 手機 APP，透過轉盤互動方式協助使用者快速決定餐點選擇。",
    highlights: [
      "使用 Kotlin 開發 Android APP",
      "設計餐點隨機推薦與互動式操作流程",
      "之後可補 APP 截圖與操作影片",
    ],
    poster: "",
    gallery: [],
    videoLink: "https://drive.google.com/file/d/1C34l35V9SlWBo_9ulOOl9d9FIpccAfxZ/view?usp=drive_link",
    demoLink: "",
    githubLink: "",
  },
  {
    id: 4,
    title: "電子病歷網頁",
    category: "學習經歷",
    tech: ["C#", "MVC"],
    summary: "以 MVC 架構實作電子病歷資料的新增、修改與刪除。",
    details:
      "以 MVC 架構及 C# 語法練習撰寫電子病歷網頁，完成電子病歷資料的新增、修改、刪除等 CRUD 功能。",
    highlights: [
      "使用 MVC 架構進行系統開發練習",
      "完成電子病歷資料 CRUD 功能",
      "目前先以文字說明呈現",
    ],
    poster: "",
    gallery: [],
    videoLink: "",
    demoLink: "",
    githubLink: "",
  },
  {
    id: 5,
    title: "無人化健身房資料庫管理系統",
    category: "學習經歷",
    tech: ["Oracle", "ERD", "Database Design"],
    summary: "整合會員、課程、器材與收支管理的關聯式資料庫系統。",
    details:
      "使用 Oracle 資料庫建立整合會員、課程、器材管理到財務收支的關聯式資料庫系統，模擬健身房營運情境並進行 CRUD 操作。",
    highlights: [
      "建立 ERD 與關聯式資料庫設計",
      "整合會員、課程、器材與財務收支資料",
      "之後可補 ERD 與操作 demo",
    ],
    poster: "",
    gallery: [],
    videoLink: "",
    demoLink: "",
    githubLink: "",
    pdfLinks: [
        {
            label: "文件",
            url: asset("assets/projects/database/database-1.pdf"),
        },
        {
            label: "簡報",
            url: asset("assets/projects/database/database-2.pdf"),
        },
        ],
  },
];

export default projects;
