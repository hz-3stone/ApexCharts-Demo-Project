import ScatterChart from '../../components/charts/presets/ScatterChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/散布図',
  component: ScatterChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '2変数の相関関係を点で可視化する散布図。工数とパフォーマンスなど分布・傾向の把握に使います。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:620px;max-width:100%">
            <ChartCard title="散布図" description="工数とパフォーマンスの相関（チーム別）">
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

export const ThreeGroups = {
  name: 'カスタム',
  args: {
    series: [
      { name: '初級', data: [[20, 40], [25, 35], [30, 45], [22, 38], [28, 42]] },
      { name: '中級', data: [[45, 65], [50, 70], [55, 60], [48, 72], [52, 68]] },
      { name: '上級', data: [[75, 90], [80, 85], [85, 92], [78, 88], [82, 95]] },
    ],
    optionsOverride: {
      xaxis: { title: { text: '経験年数' } },
      yaxis: { title: { text: 'スキルスコア' } },
    },
  },
}
