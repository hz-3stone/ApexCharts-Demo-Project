# ApexCharts Demo Project

このプロジェクトは、Vue 3 と [ApexCharts](https://apexcharts.com/) を使用したインタラクティブなチャートデモアプリケーションです。

## 公式リファレンス

- **公式サイト**: [https://apexcharts.com/](https://apexcharts.com/)
- **GitHub (Vue 3 Wrapper)**: [apexcharts/vue3-apexcharts](https://github.com/apexcharts/vue3-apexcharts)
- **デモサイト (Vercel)**: [https://apex-charts-demo-project.vercel.app](https://apex-charts-demo-project.vercel.app)
- **Storybook (Vercel)**: [https://apex-charts-demo-storybook.vercel.app](https://apex-charts-demo-storybook.vercel.app)

## ApexCharts について

ApexCharts は、Web ページ向けに美しくインタラクティブな視覚化を簡単に作成できるモダンな JavaScript チャートライブラリです。

### 主な特徴
- **インタラクティブ**: ズーム、パン、スクロール、ツールチップなどの動的な操作が可能。
- **レスポンシブ**: デバイスのサイズに合わせて自動的に調整されます。
- **多様なチャートタイプ**: 折れ線グラフ、棒グラフ、エリアチャート、パイチャート、レーダーチャート、ヒートマップなど、豊富なプリセットを提供。
- **カスタマイズ性**: SVG ベースで、テーマ、マーカー、データラベル、アノテーションなど、細部まで調整可能。
- **Vue 3 サポート**: 公式の `vue3-apexcharts` ラッパーにより、Vue のリアクティブシステムとシームレスに統合。

## プロジェクト概要

このリポジトリには、以下のコンテンツが含まれています。
- **チャートカタログ**: 9種類の基本チャートプリセット。
- **アンケートデモ**: 実データ（DummyJSON）を加工した実用的な可視化例。
- **Storybook**: 各コンポーネントを独立して確認できるサンドボックス環境。

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (Vite)
npm run dev

# Storybook の起動
npm run storybook

# プロダクションビルド
npm run build
```
