import AreaChart from '../../components/charts/presets/AreaChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/エリアグラフ',
  component: AreaChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'グラデーション塗りのエリアグラフ。収益・費用などの推移を面積で視覚的に表現します。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:620px;max-width:100%">
            <ChartCard title="エリアグラフ" description="グラデーションエリア — 収益と費用の推移">
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
    series: [{ name: '月次売上', data: [42, 58, 53, 70, 64, 88, 95, 82, 110, 98, 120, 135] }],
    optionsOverride: {
      xaxis: { categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
    },
  },
}
