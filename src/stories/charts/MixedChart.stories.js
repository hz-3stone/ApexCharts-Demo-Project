import MixedChart from '../../components/charts/presets/MixedChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/複合グラフ',
  component: MixedChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '棒グラフと折れ線グラフを組み合わせた複合グラフ。収益と成長率など異なる指標を1つのチャートで比較できます。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:680px;max-width:100%">
            <ChartCard title="複合グラフ" description="棒 + 折れ線 — 収益と成長率の推移">
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

export const Quarterly = {
  name: 'カスタム',
  args: {
    series: [
      { name: '売上高', type: 'bar', data: [320, 450, 480, 560] },
      { name: '前年比 %', type: 'line', data: [5.2, 8.1, 3.5, 12.4] },
    ],
    optionsOverride: {
      xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
      yaxis: [
        { seriesName: '売上高', title: { text: '売上高' } },
        { seriesName: '前年比 %', opposite: true, title: { text: '前年比 %' } },
      ],
    },
  },
}
