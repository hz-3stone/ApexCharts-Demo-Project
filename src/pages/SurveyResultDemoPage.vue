<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { fetchProducts } from '../services/api/dummyJson'
import { adaptProductsToSurvey } from '../features/survey/adapters/productSurveyAdapter'
import { mockSurveyResults } from '../features/survey/mocks/surveyResults'
import SurveyHero from '../components/survey/SurveyHero.vue'
import SurveySection from '../components/survey/SurveySection.vue'
import SurveyStatCard from '../components/survey/SurveyStatCard.vue'
import DonutChart from '../components/charts/presets/DonutChart.vue'
import BarChart from '../components/charts/presets/BarChart.vue'
import RadarChart from '../components/charts/presets/RadarChart.vue'
import ScatterChart from '../components/charts/presets/ScatterChart.vue'

const props = defineProps({ initialData: { default: undefined } })

const results = ref(props.initialData ?? null)
const loading = ref(!props.initialData)
const fetchError = ref(null)

onMounted(async () => {
  if (props.initialData) return
  try {
    const products = await fetchProducts(100)
    results.value = adaptProductsToSurvey(products)
  } catch {
    fetchError.value = 'データの取得に失敗しました。サンプルデータを表示しています。'
    results.value = mockSurveyResults
  } finally {
    loading.value = false
  }
})

// Q1 — Category distribution → DonutChart
const q1Series = computed(() =>
  results.value?.categoryDistribution.map(c => c.count) ?? []
)
const q1Options = computed(() => ({
  labels: results.value?.categoryDistribution.map(c => c.category) ?? [],
  colors: ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e', '#94a3b8'],
  legend: { position: 'bottom' },
  plotOptions: {
    pie: {
      donut: {
        size: '62%',
        labels: { show: true, total: { show: true, label: '総件数' } },
      },
    },
  },
  dataLabels: { enabled: false },
}))

// Q2 — Price buckets → BarChart
const q2Series = computed(() => [
  { name: '件数', data: results.value?.priceBuckets.map(b => b.count) ?? [] },
])
const q2Options = computed(() => ({
  xaxis: { categories: results.value?.priceBuckets.map(b => b.label) ?? [] },
  colors: ['#6366f1'],
  plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
  dataLabels: { enabled: true, style: { fontSize: '11px' } },
  grid: { borderColor: '#f1f5f9' },
}))

// Q3 — Rating distribution → BarChart
const q3Series = computed(() => [
  { name: '件数', data: results.value?.ratingDistribution.map(b => b.count) ?? [] },
])
const q3Options = computed(() => ({
  xaxis: { categories: results.value?.ratingDistribution.map(b => b.label) ?? [] },
  colors: ['#10b981'],
  plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
  dataLabels: { enabled: true, style: { fontSize: '11px' } },
  grid: { borderColor: '#f1f5f9' },
}))

// Q4 — Category avg rating → RadarChart
const q4Series = computed(() => [
  {
    name: '平均評価',
    data: results.value?.categoryAvgRatings.map(c => c.avgRating) ?? [],
  },
])
const q4Options = computed(() => ({
  xaxis: { categories: results.value?.categoryAvgRatings.map(c => c.category) ?? [] },
  yaxis: { min: 3.5, max: 5, tickAmount: 3 },
  colors: ['#6366f1'],
  fill: { opacity: 0.25 },
}))

// Q5 — Price vs rating → ScatterChart
const q5Series = computed(() => [
  {
    name: '商品',
    data: (results.value?.priceVsRating ?? []).map(p => [p.price, p.rating]),
  },
])
const q5Options = computed(() => ({
  xaxis: { type: 'numeric', tickAmount: 6, title: { text: '価格 (USD)' } },
  yaxis: { min: 3, max: 5.1, tickAmount: 4, title: { text: '評価スコア' } },
  colors: ['#6366f1'],
  markers: { size: 6, strokeWidth: 0, fillOpacity: 0.7 },
  grid: { borderColor: '#f1f5f9' },
}))

// Summary stats
const topCategory = computed(
  () => results.value?.categoryDistribution[0]?.category ?? '—'
)
const mostCommonPrice = computed(() => {
  const b = results.value?.priceBuckets
  if (!b?.length) return '—'
  return b.reduce((a, c) => (c.count > a.count ? c : a)).label
})
const avgRating = computed(() => {
  const r = results.value?.categoryAvgRatings
  if (!r?.length) return '—'
  return (r.reduce((s, c) => s + c.avgRating, 0) / r.length).toFixed(1)
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 px-6 py-10">
    <div class="max-w-4xl mx-auto">

      <RouterLink to="/" class="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 mb-8 transition-colors">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        トップへ戻る
      </RouterLink>

      <div v-if="loading" class="flex items-center justify-center h-64 text-slate-500 text-sm gap-2">
        <svg class="animate-spin h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        データを読み込んでいます…
      </div>

      <template v-else-if="results">
        <SurveyHero
          title="消費者の購買関心に関する実態調査"
          subtitle="オンラインショッピングにおける消費者の関心カテゴリ・価格帯・評価傾向を商品データから分析したレポートです。"
          :total-responses="results.totalResponses"
          :period="results.period"
          note="※ 本データは DummyJSON の商品データを集計・加工したものです。実際の消費者調査ではありません。"
        />

        <!-- サマリーカード -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <SurveyStatCard label="最多関心カテゴリ" :value="topCategory" sub="件数ベース" />
          <SurveyStatCard label="最多価格帯" :value="mostCommonPrice" sub="商品分布より" />
          <SurveyStatCard label="平均評価スコア" :value="avgRating" sub="上位6カテゴリ" />
        </div>

        <div v-if="fetchError" class="mb-6 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          {{ fetchError }}
        </div>

        <div class="space-y-6">
          <!-- Q1 -->
          <SurveySection
            q-number="Q1"
            title="最も関心の高い商品カテゴリはどれですか？"
            note="商品のカテゴリ別件数を集計。上位5カテゴリとそれ以外を表示しています。"
          >
            <DonutChart :series="q1Series" :options-override="q1Options" :height="320" />
          </SurveySection>

          <!-- Q2 -->
          <SurveySection
            q-number="Q2"
            title="想定している予算帯を教えてください。"
            note="商品の価格帯別分布をもとに集計しています。"
          >
            <BarChart :series="q2Series" :options-override="q2Options" :height="280" />
          </SurveySection>

          <!-- Q3 -->
          <SurveySection
            q-number="Q3"
            title="購入した商品への評価はどのくらいでしたか？"
            note="商品の評価スコアを5段階帯に区切って集計しています。"
          >
            <BarChart :series="q3Series" :options-override="q3Options" :height="280" />
          </SurveySection>

          <!-- Q4 -->
          <SurveySection
            q-number="Q4"
            title="カテゴリ別の平均評価スコアはどのくらいですか？"
            note="評価件数3件以上の上位6カテゴリを対象としています。スコアは5点満点。"
          >
            <RadarChart :series="q4Series" :options-override="q4Options" :height="340" />
          </SurveySection>

          <!-- Q5 -->
          <SurveySection
            q-number="Q5"
            title="価格と評価スコアに相関はありますか？"
            note="$500未満の商品を対象に価格と評価の散布図を描画しました。"
          >
            <ScatterChart :series="q5Series" :options-override="q5Options" :height="300" />
          </SurveySection>
        </div>
      </template>

    </div>
  </div>
</template>
