<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  { name: 'チーム A', data: [80, 65, 90, 72, 85, 70] },
  { name: 'チーム B', data: [60, 75, 65, 85, 55, 80] },
]

const defaultOptions = {
  chart: {
    toolbar: { show: false },
    dropShadow: { enabled: true, blur: 2, left: 1, top: 1, opacity: 0.1 },
  },
  xaxis: { categories: ['納期', '品質', 'スピード', 'サポート', '価値', '革新性'] },
  fill: { opacity: 0.2 },
  stroke: { width: 2 },
  markers: { size: 4 },
  colors: ['#6366f1', '#f59e0b'],
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="radar"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
