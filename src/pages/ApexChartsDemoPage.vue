<script setup>
import { RouterLink } from 'vue-router'
import ChartCatalogGrid from '../components/charts/catalog/ChartCatalogGrid.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 px-6 py-10">
    <div class="max-w-6xl mx-auto">
      <RouterLink to="/" class="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 mb-8 transition-colors">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        トップへ戻る
      </RouterLink>
      <header class="mb-8">
        <h1 class="text-2xl font-bold text-slate-900">ApexCharts カタログ</h1>
        <p class="text-sm text-slate-500 mt-1.5">Vue 3 + vue3-apexcharts プリセット一覧</p>
      </header>
      <ChartCatalogGrid />
    </div>
  </div>
</template>
