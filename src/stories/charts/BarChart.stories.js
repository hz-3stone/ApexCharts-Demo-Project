import BarChart from '../../components/charts/presets/BarChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/棒グラフ',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '週次データを比較するグループ棒グラフ。`series` と `optionsOverride` でデータとスタイルをカスタマイズできます。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:620px;max-width:100%">
            <ChartCard title="棒グラフ" description="グループ棒 — 週次売上と収益の比較">
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

export const CustomData = {
  name: 'カスタム',
  args: {
    series: [{ name: 'ページビュー', data: [120, 98, 140, 115, 160, 135, 175] }],
    optionsOverride: {
      xaxis: { categories: ['月', '火', '水', '木', '金', '土', '日'] },
    },
  },
}
