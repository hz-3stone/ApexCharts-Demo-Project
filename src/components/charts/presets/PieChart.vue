<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [44, 55, 13, 43, 22]

const defaultOptions = {
  chart: { toolbar: { show: false } },
  labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'その他'],
  colors: ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e'],
  legend: { position: 'bottom' },
  dataLabels: { enabled: true },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="pie"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
