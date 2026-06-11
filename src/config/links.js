// Storybook の URL は VITE_STORYBOOK_URL 環境変数で上書き可能
// 例: .env.local に VITE_STORYBOOK_URL=https://your-storybook.chromatic.com を追加
export const STORYBOOK_URL =
  import.meta.env?.VITE_STORYBOOK_URL ??
  'https://apex-charts-demo-storybook.vercel.app'
