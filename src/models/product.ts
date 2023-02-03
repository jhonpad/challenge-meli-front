interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Product {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  freeShipping: boolean
  soldQuantity: number
  description?: string
}

export const ProductEmptyState: Product = {
  id: '',
  title: '',
  price: {
    currency: '',
    amount: 0,
    decimals: 0
  },
  picture: '',
  condition: '',
  freeShipping: false,
  soldQuantity: 0,
  description: ''
}

export const ProductsEmptyState: Product[] = []
