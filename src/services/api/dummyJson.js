export async function fetchProducts(limit = 100) {
  const url = `https://dummyjson.com/products?limit=${limit}&select=id,title,category,price,rating,stock,brand`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`DummyJSON fetch failed: ${res.status}`)
  const data = await res.json()
  return data.products
}
