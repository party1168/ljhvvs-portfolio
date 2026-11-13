// 網站所有文字內容。來源：private/素材包.md（2026-11-13）。
// 中英文放在同一個檔案、同樣的結構裡，改一邊時另一邊也要一起改。

export const links = {
    github: "https://github.com/party1168",
    email: "a2775269@gmail.com",
    resume: "https://drive.google.com/file/d/1I7I1qpbq4N5OYLnCUD4JUKNcexmGPII-/view?usp=drive_link",
};

const cryptowillLinks = [
    { label: { en: "Decision log", zh: "技術決策紀錄" }, href: "https://github.com/party1168/cryptowill/tree/main/docs/decisions", primary: true },
    { label: { en: "Live demo", zh: "Demo" }, href: "https://cryptowill-web.vercel.app" },
    { label: { en: "Contracts", zh: "合約" }, href: "https://github.com/party1168/cryptowill" },
    { label: { en: "Frontend", zh: "前端" }, href: "https://github.com/party1168/cryptowill-web" },
];

const ticktoLinks = [
    { label: { en: "Live demo", zh: "Demo" }, href: "https://ticketo-alpha.vercel.app" },
    { label: { en: "Code (teammate's repo)", zh: "程式碼（隊友的 repo）" }, href: "https://github.com/ericwang520/ticketing-platform" },
];

export const content = {
    en: {
        meta: { switchTo: "中文" },
        nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
        hero: {
            greeting: ["Hi!", "Welcome to my personal website.", "I'm"],
            name: "Jeremy Lu",
            designationPrefix: "I'm a",
            designation: "backend-leaning full-stack engineer",
            end: ".",
            location: "Taipei, Taiwan",
            status: "Open to backend / full-stack roles in Taipei or remote",
            contact: "Contact me",
            resume: "Resume (PDF)",
        },
        about: {
            title: "About",
            paragraphs: [
                "Backend-leaning full-stack engineer with a degree in Information Management. At Medical Innovation Technology, I built healthcare systems with .NET, Angular, and PostgreSQL, including cutting a page the team had struggled with for a long time from 3.8 s to 48 ms.",
                "Outside work, I'm into Web3: two ETHGlobal hackathons, building both backend APIs and Solidity smart contracts. I validate ideas with small experiments first and write down the reasoning behind each technical decision.",
            ],
        },
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Software Engineer",
                    org: "Medical Innovation Technology",
                    period: "2025/04 – 2025/08; 2026/03 – 2026/06",
                    stack: "Angular · .NET · PostgreSQL · MySQL · Ionic",
                    bullets: [
                        "Cut the inpatient audit page's load time from 3.8 s to 48 ms by moving the per-visit recheck into a precomputed cache table, refreshed monthly and whenever source data changes.",
                        "Replaced synchronous on-click calls to an external reporting API with a validated, queued workflow run by a .NET background service; added composite indexes to keep 2-second polling cheap.",
                        "Worked across front end and back end on 40+ new pages and database tables during a delivery crunch.",
                        "Maintained an internal Ionic app for wound photos: moved the camera from Cordova to Capacitor, added a native camera/gallery picker, and switched compression to WebP.",
                        "Fixed nursing assessment forms that kept stale fields and saved wrong data, and refactored the pre-save checks.",
                    ],
                },
                {
                    role: "Research Assistant",
                    org: "National Taipei University of Nursing and Health Sciences",
                    period: "2024 – 2026/03",
                    stack: "ASP.NET MVC · Entity Framework 6 · SQLite · MySQL · Bootstrap",
                    bullets: [
                        "Built the lab's research data request platform on my own in about 6 weeks (ASP.NET MVC, Entity Framework 6, SQLite): member sign-up and review, dataset listings, data requests with IRB and agreement uploads, project workspaces with usage-time extensions, in-site messaging, and PDF generation.",
                        "Worked on the rebuild of a medical informatics association's website: MySQL schema design, REST API, Bootstrap front end, and maintenance after launch.",
                    ],
                },
            ],
        },
        projects: {
            title: "Projects",
            featured: "Featured",
            items: [
                {
                    name: "CryptoWill",
                    subtitle: "On-chain crypto inheritance, protected by World ID",
                    event: "ETHGlobal Tokyo 2026 · solo",
                    bullets: [
                        "A \"will\" for crypto assets: the owner checks in with World ID on a schedule. After check-ins stop, a grace period and a challenge period pass before the heir can claim. The owner can cancel at any time before the claim completes.",
                        "A four-state on-chain state machine that checks deadlines lazily with block.timestamp, so no keeper is needed. Time parameters are configurable, so the full flow can be demoed on testnet.",
                        "Verifies World ID zero-knowledge proofs on-chain: check-ins can repeat but a claim happens once, so the two use opposite nullifier rules. The signal is bound to the payout address so a proof can't be front-run from the mempool.",
                        "When World ID 4.0 broke the frontend-only approach, I tested it first with a spike contract, then added a stateless signing endpoint. Verification still happens on-chain.",
                        "33 Foundry tests, including fork tests against World Chain Sepolia, run in GitHub Actions CI.",
                        "Before the event, I studied why similar projects (such as DeadSwitch) failed and turned that into design constraints, then wrote a product decision doc and 12 technical decision records in English and Chinese.",
                    ],
                    tech: ["Solidity", "Foundry", "World Chain Sepolia", "World ID / IDKit", "Next.js", "TypeScript", "wagmi", "viem", "Vercel", "GitHub Actions"],
                    links: cryptowillLinks,
                },
                {
                    name: "Tickto",
                    subtitle: "Event ticketing World mini app",
                    event: "ETHGlobal Taipei 2025 · team of 3, I owned the backend",
                    bullets: [
                        "Next.js API routes (TypeScript), World ID verification, MiniKit payments (WLD / USDC.e) with server-side transaction confirmation, and dynamic ticket pricing.",
                    ],
                    tech: ["Next.js", "TypeScript", "World ID", "MiniKit"],
                    links: ticktoLinks,
                },
            ],
        },
        skills: {
            title: "Skills",
            groups: [
                { name: "Languages", items: ["TypeScript / JavaScript", "C#", "SQL", "Java", "Python", "PHP", "Solidity"] },
                { name: "Backend & databases", items: [".NET", "Node.js", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"] },
                { name: "Frontend", items: ["Angular", "Ionic", "React", "Next.js", "Tailwind CSS", "Bootstrap", "wagmi", "viem"] },
                { name: "Tools", items: ["Git", "GitHub Actions", "Docker", "Foundry", "Claude Code / Cursor (AI coding agents)"] },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    title: "B.S., Information Management",
                    institution: "National Taipei University of Nursing and Health Sciences",
                    period: "2021 – 2025/07",
                    note: "Ministry of Education overseas internship program: hospital internship in the Philippines",
                },
                {
                    title: "Department of Information Technology",
                    institution: "Taipei Municipal Songshan Agricultural and Industrial Vocational High School",
                    period: "2018 – 2021",
                },
            ],
            certTitle: "Certifications & languages",
            certs: [
                "Oracle Certified Professional: Java SE 11 Developer (1Z0-819)",
                "TOEIC 815",
                "Mandarin Chinese (native)",
            ],
        },
        contact: {
            title: "Contact",
            heading: "Get in touch",
            intro: "If you have a backend or full-stack role in mind, send me a message here or email me directly.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send message",
            invalidEmail: "Please enter a valid email address.",
            required: "Name, email and message are required.",
            captcha: "Please complete the captcha.",
            sent: "Message sent.",
        },
        footer: "© Jeremy (Chun-Hung) Lu",
    },

    zh: {
        meta: { switchTo: "EN" },
        nav: { about: "關於我", experience: "經歷", projects: "專案", skills: "技能", education: "學歷", contact: "聯絡" },
        hero: {
            greeting: ["你好！", "歡迎來到我的個人網站，", "我是"],
            name: "呂駿宏",
            designationPrefix: "我是一個",
            designation: "偏後端的全端工程師",
            end: "。",
            location: "台北",
            status: "Open to backend / full-stack roles in Taipei or remote",
            contact: "聯絡我",
            resume: "履歷（PDF）",
        },
        about: {
            title: "關於我",
            paragraphs: [
                "我畢業於資訊管理學系，是偏後端的全端工程師。在醫創工作期間，我主要用 .NET、Angular 和 PostgreSQL 開發醫療系統，其中一項成果是把團隊困擾已久的頁面，從 3.8 秒優化到 48 毫秒。",
                "工作之外，我對 Web3 和區塊鏈很有興趣，參加過兩屆 ETHGlobal，做過後端 API，也寫過 Solidity 智能合約。做專案時，我習慣先寫小實驗確認可行，再把每個技術決策的理由記錄下來。",
            ],
        },
        experience: {
            title: "經歷",
            items: [
                {
                    role: "軟體工程師",
                    org: "醫創股份有限公司",
                    period: "2025/04 – 2025/08；2026/03 – 2026/06",
                    stack: "Angular · .NET · PostgreSQL · MySQL · Ionic",
                    bullets: [
                        "在院病人全面檢核頁面：3.8 秒 → 48 毫秒。原本每次進頁面都要重新檢查所有在院病人的資料是否完整；我把計算獨立出來，存進專用的 cache table，改成每月重算一次，或資料變動時才重算。",
                        "手動上傳流程重構：原本按鈕直接同步呼叫外部 API，改成先驗證機構憑證和基本資料、排入佇列，再由 .NET 背景排程依相依順序上傳，並避開全自動上傳時段；替佇列資料表加 composite index，降低每 2 秒輪詢的負擔。",
                        "專案趕工期加入，負責 40 多個新頁面和資料表的前後端開發。",
                        "接手院內傷口照片 App（Ionic）：相機功能從 Cordova 改成 Capacitor、改用手機原生選單（拍照或相簿）、圖片壓縮改存 WebP。",
                        "修正護理評估表單殘留舊欄位、存入錯誤資料的問題，並重構儲存前檢查邏輯。",
                    ],
                },
                {
                    role: "研究助理",
                    org: "國立臺北護理健康大學",
                    period: "2024 – 2026/03",
                    stack: "ASP.NET MVC · Entity Framework 6 · SQLite · MySQL · Bootstrap",
                    bullets: [
                        "獨自開發實驗室的研究資料申請平台（ASP.NET MVC、Entity Framework 6、SQLite），約 6 週完成：會員註冊與審核、資料集上架、資料申請（上傳 IRB 和協議書）、專案空間與使用時數延長、站內訊息、PDF 產生。",
                        "參與醫療資訊學會官網重構：MySQL 資料庫設計、REST API、Bootstrap 前端、上線後維護。",
                    ],
                },
            ],
        },
        projects: {
            title: "專案",
            featured: "主打作品",
            items: [
                {
                    name: "CryptoWill",
                    subtitle: "用 World ID 保護的鏈上加密資產繼承",
                    event: "ETHGlobal Tokyo 2026 · 個人參賽",
                    bullets: [
                        "加密資產的「遺囑」：持有人定期用 World ID 證明自己還在；停止報到後，經過寬限期和挑戰期，繼承人可以領取。領取完成前持有人隨時可以取消。",
                        "四種狀態的鏈上狀態機，用 block.timestamp lazy evaluation 判斷到期，不需要 keeper；時間參數都可調，完整流程能在測試網展示。",
                        "鏈上驗證 World ID 零知識證明：報到可重複、領取只能一次，兩者 nullifier 規則相反；signal 綁定收款地址，防止 proof 在 mempool 被搶先使用。",
                        "World ID 4.0 推出後原本只靠前端的做法行不通：先用 spike 合約實測，再補一個無狀態的簽章端點，驗證仍在鏈上完成。",
                        "33 個 Foundry 測試（含 World Chain Sepolia fork 測試），接 GitHub Actions CI。",
                        "賽前研究同類專案（DeadSwitch 等）的失敗原因，轉成設計約束；寫了產品決策文件和 12 則中英雙語的技術決策紀錄。",
                    ],
                    tech: ["Solidity", "Foundry", "World Chain Sepolia", "World ID / IDKit", "Next.js", "TypeScript", "wagmi", "viem", "Vercel", "GitHub Actions"],
                    links: cryptowillLinks,
                },
                {
                    name: "Tickto",
                    subtitle: "活動售票 World mini app",
                    event: "ETHGlobal Taipei 2025 · 3 人團隊，我負責後端",
                    bullets: [
                        "Next.js API routes（TypeScript）、World ID 驗證、MiniKit 付款流程（WLD / USDC.e）與伺服器端交易確認、動態票價。",
                    ],
                    tech: ["Next.js", "TypeScript", "World ID", "MiniKit"],
                    links: ticktoLinks,
                },
            ],
        },
        skills: {
            title: "技能",
            groups: [
                { name: "語言", items: ["TypeScript / JavaScript", "C#", "SQL", "Java", "Python", "PHP", "Solidity"] },
                { name: "後端與資料庫", items: [".NET", "Node.js", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"] },
                { name: "前端", items: ["Angular", "Ionic", "React", "Next.js", "Tailwind CSS", "Bootstrap", "wagmi", "viem"] },
                { name: "工具", items: ["Git", "GitHub Actions", "Docker", "Foundry", "Claude Code / Cursor（AI coding agent）"] },
            ],
        },
        education: {
            title: "學歷",
            items: [
                {
                    title: "資訊管理學系 學士",
                    institution: "國立臺北護理健康大學",
                    period: "2021 – 2025/07",
                    note: "教育部學海築夢計畫：赴菲律賓醫院交換實習",
                },
                {
                    title: "資訊科",
                    institution: "市立台北松山高級工農",
                    period: "2018 – 2021",
                },
            ],
            certTitle: "證照與語言",
            certs: [
                "Oracle Certified Professional: Java SE 11 Developer（1Z0-819）",
                "TOEIC 815",
                "中文母語",
            ],
        },
        contact: {
            title: "聯絡",
            heading: "聯絡我",
            intro: "如果有後端或全端的職缺，歡迎用表單留言，或直接寄信給我。",
            name: "姓名",
            email: "Email",
            message: "訊息",
            send: "送出",
            invalidEmail: "請輸入正確的 Email。",
            required: "姓名、Email 和訊息都要填。",
            captcha: "請先完成驗證。",
            sent: "訊息已送出。",
        },
        footer: "© 呂駿宏 Jeremy Lu",
    },
};
