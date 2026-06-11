<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  {
    name: 'チーム A',
    data: [[65, 80], [70, 72], [55, 65], [75, 88], [60, 74], [85, 95], [50, 58]],
  },
  {
    name: 'チーム B',
    data: [[40, 50], [45, 62], [55, 48], [35, 55], [60, 40], [50, 68], [70, 58]],
  },
]

const defaultOptions = {
  chart: { toolbar: { show: false }, zoom: { enabled: false } },
  xaxis: { type: 'numeric', tickAmount: 8, title: { text: '工数（時間）' } },
  yaxis: { title: { text: 'パフォーマンス' } },
  colors: ['#6366f1', '#f59e0b'],
  grid: { borderColor: '#f1f5f9' },
  markers: { size: 7, strokeWidth: 0 },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="scatter"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
