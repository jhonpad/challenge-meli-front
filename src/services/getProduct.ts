import axios from 'axios'
import { producAdapter, searchAdapter } from '../adapters/search.adapter'
import type { Item, Product, Search, SearchResponse } from '../models'

const DOMAIN = 'http://localhost:3001'

export const getProducts = async (query: string): Promise<Search> => {
  const url = `${DOMAIN}/api/items?search=${query}`
  const res = await axios.get(url)
  return searchAdapter(res.data as SearchResponse)
}

export const getProductById = async (id: string): Promise<Product> => {
  const url = `${DOMAIN}/api/items/${id}`
  const res = await axios.get(url)
  return producAdapter(res.data.item as Item)
}
