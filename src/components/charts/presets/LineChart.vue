<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  { name: '訪問者数', data: [31, 40, 28, 51, 42, 109, 100] },
  { name: 'セッション数', data: [11, 32, 45, 32, 34, 52, 41] },
]

const defaultOptions = {
  chart: { toolbar: { show: false }, zoom: { enabled: false } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: { categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'] },
  colors: ['#6366f1', '#f59e0b'],
  grid: { borderColor: '#f1f5f9' },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="line"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
