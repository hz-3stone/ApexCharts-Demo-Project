<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  totalResponses: { type: Number, required: true },
  period: { type: String, required: true },
  note: String,
})
</script>

<template>
  <div class="mb-12">
    <p class="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">調査レポート</p>
    <h1 class="text-4xl font-bold text-slate-900 leading-tight">{{ title }}</h1>
    <p class="text-base text-slate-500 mt-3 max-w-2xl leading-relaxed">{{ subtitle }}</p>
    <div class="flex flex-wrap gap-8 mt-6 text-sm">
      <span class="text-slate-500">
        回答数：<strong class="text-slate-800 font-semibold">{{ totalResponses.toLocaleString() }}</strong>
      </span>
      <span class="text-slate-500">
        調査期間：<strong class="text-slate-700 font-medium">{{ period }}</strong>
      </span>
    </div>
    <p v-if="note" class="text-xs text-slate-500 mt-5 border-l-2 border-slate-200 pl-3 leading-relaxed">
      {{ note }}</p>
  </div>
</template>
