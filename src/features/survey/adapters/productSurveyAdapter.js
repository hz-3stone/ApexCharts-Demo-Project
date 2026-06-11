import { fetchProducts } from '../../../services/api/dummyJson'

const fmt = (c) =>
  c.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

function categoryDistribution(products) {
  const counts = new Map()
  for (const p of products) {
    const cat = fmt(p.category)
    counts.set(cat, (counts.get(cat) ?? 0) + 1)
  }
  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => ({ category, count }))
  const top5 = sorted.slice(0, 5)
  const rest = sorted.slice(5).reduce((s, c) => s + c.count, 0)
  return rest > 0 ? [...top5, { category: 'Others', count: rest }] : top5
}

const PRICE_RANGES = [
  { label: 'Under $25', max: 25 },
  { label: '$25–50', max: 50 },
  { label: '$50–100', max: 100 },
  { label: '$100–250', max: 250 },
  { label: '$250–500', max: 500 },
  { label: '$500+', max: Infinity },
]

function priceBuckets(products) {
  const buckets = PRICE_RANGES.map(r => ({ label: r.label, count: 0 }))
  for (const p of products) {
    const i = PRICE_RANGES.findIndex(r => p.price < r.max)
    if (i >= 0) buckets[i].count++
  }
  return buckets
}

const RATING_RANGES = [
  { label: '★ 1–2', min: 0, max: 2 },
  { label: '★ 2–3', min: 2, max: 3 },
  { label: '★ 3–4', min: 3, max: 4 },
  { label: '★ 4–4.5', min: 4, max: 4.5 },
  { label: '★ 4.5–5', min: 4.5, max: 5.1 },
]

function ratingDistribution(products) {
  const buckets = RATING_RANGES.map(r => ({ label: r.label, count: 0 }))
  for (const p of products) {
    const i = RATING_RANGES.findIndex(r => p.rating >= r.min && p.rating < r.max)
    if (i >= 0) buckets[i].count++
  }
  return buckets
}

function categoryAvgRatings(products) {
  const map = new Map()
  for (const p of products) {
    const cat = fmt(p.category)
    const cur = map.get(cat) ?? { sum: 0, n: 0 }
    map.set(cat, { sum: cur.sum + p.rating, n: cur.n + 1 })
  }
  return [...map.entries()]
    .filter(([, v]) => v.n >= 3)
    .map(([category, { sum, n }]) => ({
      category,
      avgRating: Math.round((sum / n) * 10) / 10,
    }))
    .sort((a, b) => b.avgRating - a.avgRating)
    .slice(0, 6)
}

function priceVsRating(products) {
  return products
    .filter(p => p.price < 500)
    .map(p => ({ price: Math.round(p.price), rating: p.rating }))
    .slice(0, 80)
}

export function adaptProductsToSurvey(products, period = '2024-10 – 2025-03') {
  return {
    totalResponses: products.length,
    period,
    categoryDistribution: categoryDistribution(products),
    priceBuckets: priceBuckets(products),
    ratingDistribution: ratingDistribution(products),
    categoryAvgRatings: categoryAvgRatings(products),
    priceVsRating: priceVsRating(products),
  }
}
