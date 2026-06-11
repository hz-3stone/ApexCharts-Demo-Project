# ApexCharts Demo Project

このプロジェクトは、Vue 3、ApexCharts、および Tailwind CSS を使用して構築された、チャートコンポーネントのカタログおよびデモアプリケーションです。

## プロジェクト概要

- **目的**: ApexCharts を Vue 3 で効果的に使用するためのプリセット集と、実データ（DummyJSON）を使用した具体的な可視化例の提供。
- **主な技術スタック**:
  - **Framework**: Vue 3 (Composition API)
  - **Build Tool**: Vite
  - **Styling**: Tailwind CSS (V4)
  - **Charts**: ApexCharts (`vue3-apexcharts`)
  - **Routing**: Vue Router
  - **Documentation**: Storybook

## ディレクトリ構造

- `src/components/charts/base/`: `BaseApexChart.vue`（ApexCharts のベースラッパー）を配置。
- `src/components/charts/presets/`: 各種チャートタイプ（Bar, Line, Pie など）の事前設定済みコンポーネント。
- `src/features/survey/`: アンケート結果デモに関連するロジックとアダプター。
- `src/pages/`: アプリケーションの各画面。
- `src/services/api/`: 外部 API（DummyJSON）との通信ロジック。
- `src/stories/`: Storybook 用のストーリーファイル。

## 開発コマンド

| コマンド | 内容 |
| :--- | :--- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバーの起動 |
| `npm run build` | プロダクションビルドの作成 |
| `npm run preview` | ビルド済み成果物のプレビュー |
| `npm run storybook` | Storybook の起動 |

## 開発上の注意点

- **コンポーネント設計**: 基本的に `BaseApexChart.vue` をラップしてプリセットを作成しています。共通のオプション（ツールチップの設定、フォント、配色など）は極力共通化する方針です。
- **データ変換**: API から取得した生データをチャート形式に変換する際は、`src/features/survey/adapters/` のようなアダプター層を設けて変換ロジックを分離してください。
- **スタイリング**: Tailwind CSS を使用しています。独自の CSS を追加する場合は `src/style.css` を編集するか、Vue コンポーネント内の `<style>` ブロックを使用してください。
