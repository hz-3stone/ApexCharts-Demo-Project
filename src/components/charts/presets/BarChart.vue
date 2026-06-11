<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  { name: '売上', data: [44, 55, 57, 56, 61, 58, 63] },
  { name: '収益', data: [76, 85, 101, 98, 87, 105, 91] },
]

const defaultOptions = {
  chart: { toolbar: { show: false } },
  plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
  dataLabels: { enabled: false },
  xaxis: { categories: ['月', '火', '水', '木', '金', '土', '日'] },
  colors: ['#6366f1', '#22d3ee'],
  grid: { borderColor: '#f1f5f9' },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="bar"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
