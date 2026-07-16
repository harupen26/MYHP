# CV の更新方法 / How to update the CV

サイトに表示される CV は `docs/CV.pdf` です。その LaTeX ソースが `cv/cv.tex` です。

## 推奨: cv.tex を編集して push するだけ

1. `cv/cv.tex` を編集する（テキストエディタ・Claude・Codex など何でも可）
2. main ブランチに push する
3. GitHub Actions（`.github/workflows/build-cv.yml`）が自動で LaTeX をコンパイルし、
   `docs/CV.pdf` を更新してコミットする（1〜2分）
4. GitHub Pages が再デプロイされ、サイトの CV が新しくなる（さらに1〜2分）

ローカルに LaTeX 環境は不要。ビルド結果は GitHub の Actions タブで確認できる。
失敗した場合は Actions のログにコンパイルエラーが出る。

## 代替手段

- **Overleaf**: `cv.tex` を Overleaf にアップロードして編集 → PDF をダウンロード →
  `docs/CV.pdf` に上書きして push。**このとき `cv/cv.tex` も同じ内容に更新しておくこと**
  （ソースと PDF の乖離を防ぐため）
- **ローカルでビルド**: TeX Live か [Tectonic](https://tectonic-typesetting.github.io/) で
  `cv/` ディレクトリ内で `pdflatex cv.tex` (または `tectonic cv.tex`) → 生成された
  `cv.pdf` を `docs/CV.pdf` にコピー

## AI エージェント向けメモ

- CV の内容変更 = `cv/cv.tex` を編集して push。`docs/CV.pdf` を直接触る必要はない
- 手動で `docs/CV.pdf` を差し替えた場合は、必ず `cv/cv.tex` にも同じ変更を反映すること
- テンプレートの書式: 職歴・学歴は `\resumeSubheading{役職}{期間}{所属(斜体)}{}`、
  受賞・資格・論文は `\resumeProjectHeading{\textbf{タイトル}}{日付}`、
  箇条書きは `\resumeItemListStart` + `\resumeItem{...}` + `\resumeItemListEnd`
