import RadarChart from '../../components/charts/presets/RadarChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/レーダーチャート',
  component: RadarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '複数の評価軸を多角形で比較するレーダーチャート。チームや製品のバランス評価に適しています。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:520px;max-width:100%">
            <ChartCard title="レーダーチャート" description="チームパフォーマンス — 6項目評価">
              <story />
            </ChartCard>
          </div>
        </div>
      `,
    }),
  ],
}

export default meta
export const Default = {
  name: 'デフォルト',
}

export const SingleTeam = {
  name: 'カスタム',
  args: {
    series: [{ name: '2024年度', data: [88, 72, 85, 90, 78, 65] }],
    optionsOverride: {
      xaxis: { categories: ['企画力', '技術力', '実行力', '協調性', 'コスト意識', '顧客志向'] },
    },
  },
}
