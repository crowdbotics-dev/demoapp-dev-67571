import axios from "axios"
const products = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function products_get_products_list(payload) {
  return products.get(`/products`)
}
export const apiService = { products_get_products_list }
