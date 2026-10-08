# teaching-tools — 我的班級工具總專案

## 對話開始時請先讀
進度與最近更動都在 repo 根目錄的 `工作筆記.md`（駕駛艙）。

## 工作模式
- **開工**：對 Claude 說「開工」→ 讀工作筆記、報告 git 狀態、建議下一步（`.claude/skills/startup/`）
- **加新工具**：對 Claude 說「我想做一個 XXX 工具」→ Claude 在根目錄建 `<工具名>/` 子資料夾（跟 `wordcloud/` 一樣），並在 `index.html` 首頁加一張卡片
- **結束工作**：對 Claude 說「**收工**」→ 更新 `工作筆記.md` + commit + push（`.claude/skills/shutdown/`）

## 三個家
- 🐙 GitHub repo：`youlun1214/teaching-tools`（公開，網頁的家；GitHub Pages 從 `main` 根目錄發布）
- 📘 工作筆記：`工作筆記.md`（想法與進度的家，放在 repo 內，雲端與本機都讀得到）
- 🔥 Firebase 專案：`cb-working-base`（資料的家，Security Rules 在 `firestore.rules`）

## 工具清單
- `wordcloud/` — 即時文字雲（學生頁 `wordcloud/index.html`、大螢幕 `wordcloud/display.html`，Firestore 集合 `wordcloud_words`）

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號）
- 每個新 Firestore 集合都要在 `firestore.rules` 寫白名單規則，其他集合預設禁止
- API Key 不寫死在 HTML（`firebase-config.js` 的 Firebase Config 例外，設計上可公開）
- commit 訊息要寫清楚做了什麼 + 為什麼
- `.claude/settings.local.json`、`.claude/worktrees/` 絕不 commit（可能含 token）；`.claude/skills/` 要 commit
- 收工前說「收工」讓 Claude 同步
