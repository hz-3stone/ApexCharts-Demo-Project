<script setup>
import { RouterLink } from 'vue-router'
import { STORYBOOK_URL } from '../config/links'

const demos = [
  {
    title: 'チャートカタログ',
    description: '9種類のチャートプリセット（Bar・Line・Area・Pie・Donut・Radar・Scatter・Heatmap・Mixed）を一覧で確認できるカタログページ。',
    to: '/apexcharts',
  },
  {
    title: 'アンケート結果デモ',
    description: 'DummyJSON の商品データを集計・加工し、アンケート結果レポート風に可視化したデモページ。実利用イメージを確認できます。',
    to: '/survey-result',
  },
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <div class="max-w-3xl mx-auto px-6 py-16">

      <!-- Header -->
      <header class="mb-14">
        <p class="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">Vue 3 + vue3-apexcharts</p>
        <h1 class="text-5xl font-bold text-slate-900 leading-none">ApexCharts Demo Hub</h1>
        <p class="text-base text-slate-500 mt-5 leading-relaxed">チャートプリセットのカタログと実利用イメージのデモ、および Storybook への入口をまとめたページです。</p>
      </header>

      <!-- Demo pages -->
      <section class="mb-10">
        <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">デモページ</p>
        <div class="flex flex-col gap-3">
          <RouterLink
            v-for="demo in demos"
            :key="demo.title"
            :to="demo.to"
            class="group bg-white border border-slate-200 rounded-xl p-6 flex items-start justify-between gap-6 hover:border-indigo-300 transition-colors"
          >
            <div>
              <h2 class="text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{{ demo.title }}</h2>
              <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">{{ demo.description }}</p>
            </div>
            <svg
              class="w-4 h-4 text-slate-300 group-hover:text-indigo-400 flex-shrink-0 mt-1 transition-colors"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </section>

      <!-- Storybook -->
      <section>
        <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">コンポーネントドキュメント</p>
        <a
          :href="STORYBOOK_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white border border-slate-200 rounded-xl p-6 flex items-start justify-between gap-6 hover:border-slate-300 transition-colors"
        >
          <div>
            <h2 class="text-base font-semibold text-slate-900">Storybook</h2>
            <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">各チャートコンポーネントの Story をインタラクティブに確認できます。固定モックデータを使ったコンポーネントカタログ。</p>
          </div>
          <svg
            class="w-4 h-4 text-slate-300 group-hover:text-slate-400 flex-shrink-0 mt-1 transition-colors"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

    </div>
  </div>
</template>
