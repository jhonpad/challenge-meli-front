import type { Author } from './author'
import { AuthorEmptyState } from './author'
import type { Product } from './product'

export interface Search {
  author: Author
  categories: string[]
  products: Product[]
}
export const SearchEmptyState: Search = {
  author: AuthorEmptyState,
  categories: [],
  products: []
}
