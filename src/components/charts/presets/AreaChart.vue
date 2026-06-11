<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  { name: '収益', data: [31, 40, 28, 51, 42, 82, 56, 70, 45, 91, 75, 100] },
  { name: '費用', data: [11, 32, 45, 32, 34, 52, 41, 60, 30, 72, 58, 80] },
]

const defaultOptions = {
  chart: { toolbar: { show: false }, zoom: { enabled: false } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: { opacityFrom: 0.45, opacityTo: 0.05, shadeIntensity: 1 },
  },
  xaxis: {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  colors: ['#6366f1', '#22d3ee'],
  grid: { borderColor: '#f1f5f9' },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="area"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
