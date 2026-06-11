<script setup>
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  type: { type: String, required: true },
  series: { required: true },
  options: { type: Object, required: true },
  height: { default: undefined },
  width: { default: undefined },
})
</script>

<template>
  <VueApexCharts
    :type="props.type"
    :series="props.series"
    :options="props.options"
    :height="props.height ?? 300"
    :width="props.width ?? '100%'"
  />
</template>
