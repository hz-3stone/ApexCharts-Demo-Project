import HeatmapChart from '../../components/charts/presets/HeatmapChart.vue'
import ChartCard from '../../components/charts/catalog/ChartCard.vue'

const meta = {
  title: 'チャート/プリセット/ヒートマップ',
  component: HeatmapChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '週次・月次アクティビティなどを色の濃淡で表現するヒートマップ。時系列のパターン把握に適しています。',
      },
    },
  },
  decorators: [
    () => ({
      components: { ChartCard },
      template: `
        <div style="background:#f8fafc;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px">
          <div style="width:680px;max-width:100%">
            <ChartCard title="ヒートマップ" description="週次アクティビティ — 12週間ビュー">
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
  args: {
    height: 280,
  },
}

export const WarmColor = {
  name: 'カスタム',
  args: {
    height: 280,
    optionsOverride: {
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 4,
          colorScale: {
            ranges: [
              { from: 0, to: 2, color: '#fef3c7', name: '低' },
              { from: 3, to: 6, color: '#f59e0b', name: '中' },
              { from: 7, to: 9, color: '#b45309', name: '高' },
            ],
          },
        },
      },
    },
  },
}
