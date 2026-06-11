import PieChart from '../../components/charts/presets/PieChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/円グラフ',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '割合の比較に適した円グラフ。ブラウザシェアなど構成比の表示に使います。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:500px;max-width:100%">
            <ChartCard title="円グラフ" description="ブラウザ市場シェア">
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

export const CustomLabels = {
  name: 'カスタム',
  args: {
    series: [35, 28, 18, 12, 7],
    optionsOverride: {
      labels: ['オーガニック', 'ダイレクト', '参照元', 'SNS', 'メール'],
    },
  },
}
