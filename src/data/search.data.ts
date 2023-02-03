import type { SearchResponse } from '../models/searchResponse'

export const SearchJson: SearchResponse =
{
  author: {
    name: 'Jhon',
    lastname: 'Padilla'
  },
  categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
  items: [
    {
      id: 'MLA1287586974',
      title: 'Apple iPhone 13 (128 Gb) - Blanco Estelar',
      price: {
        currency: 'ARS',
        amount: 412000,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_736168-MLA47781742030_102021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0
    },
    {
      id: 'MLA931449399',
      title: 'Apple iPhone 11 (128 Gb) - Negro',
      price: {
        currency: 'ARS',
        amount: 301999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 250
    },
    {
      id: 'MLA1275795900',
      title: 'Apple iPhone SE (3ª Generación, 128 Gb) - Azul Medianoche',
      price: {
        currency: 'ARS',
        amount: 276999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5
    }
  ]
}
