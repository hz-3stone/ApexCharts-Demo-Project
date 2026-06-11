<script setup>
defineProps({
  label: { type: String, required: true },
  value: [String, Number],
  sub: String,
})
</script>

<template>
  <div class="bg-white rounded-xl border border-slate-200 p-5">
    <div class="text-2xl font-bold text-slate-900" style="letter-spacing:-0.02em">{{ value }}</div>
    <div class="text-sm text-slate-600 mt-1.5">{{ label }}</div>
    <div v-if="sub" class="text-xs text-slate-500 mt-1">{{ sub }}</div>
  </div>
</template>
