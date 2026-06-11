<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12']
const row = (vals) => vals.map((y, i) => ({ x: weeks[i], y }))

const defaultSeries = [
  { name: '日', data: row([0, 2, 4, 3, 1, 5, 2, 4, 3, 2, 1, 3]) },
  { name: '月', data: row([5, 8, 6, 9, 7, 8, 6, 7, 9, 5, 8, 9]) },
  { name: '火', data: row([6, 7, 8, 5, 9, 6, 8, 5, 7, 8, 6, 9]) },
  { name: '水', data: row([7, 5, 9, 6, 8, 7, 5, 8, 6, 9, 7, 5]) },
  { name: '木', data: row([4, 8, 6, 7, 5, 9, 7, 6, 8, 4, 9, 6]) },
  { name: '金', data: row([8, 6, 7, 9, 6, 5, 9, 7, 5, 8, 6, 7]) },
  { name: '土', data: row([1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 3, 1]) },
]

const defaultOptions = {
  chart: { toolbar: { show: false } },
  dataLabels: { enabled: false },
  colors: ['#6366f1'],
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 4,
      colorScale: {
        ranges: [
          { from: 0, to: 2, color: '#e0e7ff', name: '低' },
          { from: 3, to: 6, color: '#818cf8', name: '中' },
          { from: 7, to: 9, color: '#4338ca', name: '高' },
        ],
      },
    },
  },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="heatmap"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
