---
name: shutdown
description: 收工同步助手。當使用者說「收工」、「結束了」、「準備換電腦」、「該同步的同步」、「先到這裡」等任何要結束工作並進行同步的請求時，請一定要使用此技能。本技能會智能更新 repo 內的工作筆記.md、git commit + push GitHub。
---

# 收工同步助手

對話結束前，把今天的工作完整保存：
- **工作筆記**：repo 根目錄 `工作筆記.md`，更新「上次做到哪」+「下一步」+「最近更動紀錄」
- **GitHub**：commit + push 到目前所在分支

## 收工 SOP（依序執行）

### 步驟 1：盤點今天做了什麼
從對話歷史 + `git status --short` + `git log origin/<branch>..HEAD --oneline` 摘要：完成的檔案、決策、踩到的新坑。

若沒有任何實質變動（只是問問題、沒改檔、也沒有未 push 的 commit）→ 告訴使用者「今天沒有需要同步的變動」並結束。

### 步驟 2：更新 `工作筆記.md`
- 「⏯️ 上次做到哪」：最後動作、完成的檔案
- 「➡️ 下一步」：1-3 項具體下一步
- 「🛠️ 工具清單」：有新工具或狀態改變時更新（同時更新 `CLAUDE.md` 的工具清單與 `README.md`）
- 「🗓️ 最近更動紀錄」表格最後加一行：今天日期 + 摘要 + ✅
- 「🕳️ 踩坑筆記」（若有新坑）：加一條

### 步驟 3：Git commit + push
```bash
git add <今天動到的檔案 + 工作筆記.md，不要 add .claude/settings.local.json 或 .claude/worktrees/>
git commit -m "<今天工作摘要的 commit message>"
git push -u origin "$(git branch --show-current)"
```

commit message 寫法：
- 標題行：「動詞 + 對象」
- 正文：3-5 條 bullet 描述變動 + 為什麼

push 若因網路失敗，間隔 2s、4s、8s、16s 重試最多 4 次。

### 步驟 4：報告同步狀態

| 平台 | 動到的檔案 | 狀態 |
|------|----------|------|
| 工作筆記 | 工作筆記.md | ✅ |
| GitHub | commit + push（分支名） | ✅ |

若目前分支不是 `main`，提醒使用者：網頁要上線需把分支合併進 `main`（可請 Claude 開 PR）。

## 不該做的事
- ❌ 對「沒實質進度」的對話也跑同步
- ❌ 把 `.claude/settings.local.json`、`.claude/worktrees/` commit 進去
- ❌ commit message 寫「更新」、「修改」這種沒資訊的字
- ❌ 推到使用者沒指定的分支
