# MYHP — Haruki Yasui Personal Website

https://harupen26.github.io/MYHP/ (GitHub Pages, main ブランチから自動デプロイ)

## 構成

| パス | 内容 |
|---|---|
| `index.html` | トップページ（プロフィール写真・Career & Milestones・連絡先） |
| `publications.html` / `portfolio.html` / `aboutme.html` / `hobby.html` | 各ページ |
| `css/style.css` | 全ページ共通スタイル |
| `images/profile.jpg` | プロフィール写真（800×800、円形200pxで表示） |
| `docs/CV.pdf` | CV（**直接編集しない** — `cv/cv.tex` から自動生成） |
| `cv/cv.tex` | CV の LaTeX ソース（編集して push すると Actions が docs/CV.pdf を自動更新） |

## 更新の仕方

- **CV**: `cv/cv.tex` を編集して push（詳細は [cv/README.md](cv/README.md)）
- **経歴 (トップページ)**: `index.html` の Career & Milestones の `<li class="career-item">` を追加・編集。
  CV を更新したら、対応する項目をこちらにも反映するのを忘れずに
- **プロフィール写真**: 正方形にトリミングした画像を 800×800 に縮小して `images/profile.jpg` に上書き
- push すれば GitHub Pages が数分で自動反映
