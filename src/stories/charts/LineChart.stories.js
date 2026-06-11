import LineChart from '../../components/charts/presets/LineChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/折れ線グラフ',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'スムーズ曲線の折れ線グラフ。複数系列の推移比較に適しています。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:620px;max-width:100%">
            <ChartCard title="折れ線グラフ" description="スムーズライン — 訪問者数とセッション数">
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

export const SingleSeries = {
  name: 'カスタム',
  args: {
    series: [{ name: '収益', data: [30, 42, 38, 60, 55, 72, 80, 65, 90, 85, 100, 112] }],
    optionsOverride: {
      xaxis: { categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
    },
  },
}
