import ChartCatalogGrid from '../../components/charts/catalog/ChartCatalogGrid.vue'

const meta = {
  title: 'チャート/カタログ',
  component: ChartCatalogGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '9種類のチャートプリセットを一覧表示するカタロググリッド。各カードに使用方法のコードスニペットへのリンクがあります。',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="background:#f8fafc;padding:40px 24px">
          <div style="max-width:1152px;margin:0 auto">
            <header style="margin-bottom:32px">
              <h1 style="font-size:1.5rem;font-weight:700;color:#0f172a;margin:0 0 6px;letter-spacing:-0.02em">ApexCharts カタログ</h1>
              <p style="font-size:0.875rem;color:#64748b;margin:0">Vue 3 + vue3-apexcharts プリセット一覧</p>
            </header>
            <story />
          </div>
        </div>
      `,
    }),
  ],
}

export default meta

export const Default = {
  name: '全カタログ',
}
