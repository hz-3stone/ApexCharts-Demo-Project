<script setup>
import ChartCard from './ChartCard.vue'
import BarChart from '../presets/BarChart.vue'
import LineChart from '../presets/LineChart.vue'
import PieChart from '../presets/PieChart.vue'
import AreaChart from '../presets/AreaChart.vue'
import DonutChart from '../presets/DonutChart.vue'
import RadarChart from '../presets/RadarChart.vue'
import ScatterChart from '../presets/ScatterChart.vue'
import HeatmapChart from '../presets/HeatmapChart.vue'
import MixedChart from '../presets/MixedChart.vue'
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
    <ChartCard title="棒グラフ" description="グループ棒 — 週次売上と収益の比較">
      <BarChart />
    </ChartCard>

    <ChartCard title="折れ線グラフ" description="スムーズ曲線 — 訪問者数とセッション数">
      <LineChart />
    </ChartCard>

    <ChartCard title="エリアグラフ" description="グラデーション塗り — 収益と費用の推移">
      <AreaChart />
    </ChartCard>

    <ChartCard title="円グラフ" description="ブラウザ別シェア">
      <PieChart />
    </ChartCard>

    <ChartCard title="ドーナツグラフ" description="製品別内訳 — 中央に合計を表示">
      <DonutChart />
    </ChartCard>

    <ChartCard title="レーダーチャート" description="チーム別パフォーマンス — 6指標比較">
      <RadarChart />
    </ChartCard>

    <ChartCard title="散布図" description="工数 vs パフォーマンス — チーム別分布">
      <ScatterChart />
    </ChartCard>

    <ChartCard title="ヒートマップ" description="週次アクティビティ — 12週間の可視化">
      <HeatmapChart />
    </ChartCard>

    <ChartCard title="複合グラフ" description="棒 + 折れ線 — 収益と成長率の組み合わせ">
      <MixedChart />
    </ChartCard>
  </div>
</template>
