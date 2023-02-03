import type { Item, Product, Search, SearchResponse } from '../models'

export const searchAdapter = (search: SearchResponse): Search => ({
  author: {
    name: search.author.name,
    lastname: search.author.lastname
  },
  categories: search.categories,
  products: search.items.map((item) => {
    return producAdapter(item)
  })
})

export const producAdapter = (item: Item): Product => (
  {
    id: item.id,
    title: item.title,
    condition: item.condition,
    picture: item.picture,
    freeShipping: item.free_shipping,
    price: item.price,
    soldQuantity: item.sold_quantity,
    description: ((item?.description) != null) ? item.description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  }
)
