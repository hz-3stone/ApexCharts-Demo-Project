import DonutChart from '../../components/charts/presets/DonutChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/ドーナツグラフ',
  component: DonutChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '中央にラベルを表示できるドーナツグラフ。製品カテゴリ別内訳など構成比の表示に使います。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:500px;max-width:100%">
            <ChartCard title="ドーナツグラフ" description="製品カテゴリ別内訳（中央ラベル付き）">
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
    series: [42, 26, 18, 9, 5],
    optionsOverride: {
      labels: ['フロントエンド', 'バックエンド', 'インフラ', 'デザイン', 'PM'],
    },
  },
}
