import axios from "axios"
const products = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function products_get_products_list(payload) {
  return products.get(`/products`)
}
function products_get_products_id_read(payload) {
  return products.get(`/products/id`)
}
export const apiService = {
  products_get_products_list,
  products_get_products_id_read
}
