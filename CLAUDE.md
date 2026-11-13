# 個人網站（呂駿宏 / Jeremy Lu）

網站內容的唯一來源：`private/素材包.md`（2026-11-13 版，從 career 專案複製）。
`private/` 已加進 `.gitignore`，因為素材包含有不能公開的資訊，**不要把它移出或 commit**。

## 規則（素材包第 0 節）

- 網站內容只能用這份素材包裡的事實；沒寫的經歷、數字、技能程度不要自己補，資料不足就留 TODO 問我。
- 這是**公開網站**：第 7 節「不要放上網站」列的內容一律不能出現在頁面、meta、alt、註解、commit 裡。
- 文字語氣照第 6 節的規則寫（平實、每句有證據、不浮誇、不寫 AI 翻譯腔）。
- 專有名詞保留英文（spike、cache table、Solidity、nullifier）。
- 中英文內容要同步：改了一個語言的內容，另一個語言也要改。

## 專案現況

- Next.js 14 static export（`output: 'export'`），部署到 GitHub Pages（`gh-pages` 分支，basePath `/ljhvvs-portfolio`）。
- 所有文字內容（中英文）都在 `utils/data/content.js`，同一個檔案裡兩種語言結構相同；語言切換在 `app/components/lang-provider.jsx`，預設英文。
- 聯絡表單用 EmailJS + reCAPTCHA，金鑰從 `.env` 讀（`.env` 不進 git）。
- 部署：`npm run deploy`（build → commit `out/` → subtree push 到 `gh-pages`）。
