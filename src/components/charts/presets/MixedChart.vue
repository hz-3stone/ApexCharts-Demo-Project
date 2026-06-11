<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [
  { name: '収益', type: 'bar', data: [44, 55, 41, 67, 22, 43, 60, 72, 55, 83, 65, 90] },
  { name: '成長率 %', type: 'line', data: [1.1, 2.5, -1.2, 4.2, -3.3, 2.8, 4.5, 2.0, -1.5, 5.1, 2.3, 4.8] },
]

const defaultOptions = {
  chart: { toolbar: { show: false } },
  stroke: { width: [0, 3] },
  dataLabels: { enabled: false },
  plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
  xaxis: {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yaxis: [
    { seriesName: '収益', title: { text: '収益' } },
    { seriesName: '成長率 %', opposite: true, title: { text: '成長率 %' } },
  ],
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
