<script setup>
import { computed } from 'vue'
import BaseApexChart from '../base/BaseApexChart.vue'

const props = defineProps(['series', 'optionsOverride', 'height'])

const defaultSeries = [44, 55, 13, 33, 20]

const defaultOptions = {
  chart: { toolbar: { show: false } },
  labels: ['製品 A', '製品 B', '製品 C', '製品 D', '製品 E'],
  colors: ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e'],
  legend: { position: 'bottom' },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total',
            formatter: () => '165',
          },
        },
      },
    },
  },
  dataLabels: { enabled: false },
}

const mergedOptions = computed(() => ({ ...defaultOptions, ...(props.optionsOverride ?? {}) }))
</script>

<template>
  <BaseApexChart
    type="donut"
    :series="props.series ?? defaultSeries"
    :options="mergedOptions"
    :height="props.height"
  />
</template>
