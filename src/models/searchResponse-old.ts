interface Paging {
  total: number
  primary_results: number
  offset: number
  limit: number
}

interface Shipping {
  logistic_type: string
  mode: string
  store_pick_up: boolean
  free_shipping: boolean
  tags: string[]
  promise?: any
}

interface Ratings {
  negative: number
  neutral: number
  positive: number
}

interface Transactions {
  canceled: number
  completed: number
  period: string
  ratings: Ratings
  total: number
}

interface Sales {
  period: string
  completed: number
}

interface Excluded {
  real_value: number
  real_rate: number
}

interface Claims {
  period: string
  rate: number
  value: number
  excluded: Excluded
}

interface Excluded2 {
  real_value: number
  real_rate: number
}

interface DelayedHandlingTime {
  period: string
  rate: number
  value: number
  excluded: Excluded2
}

interface Excluded3 {
  real_value: number
  real_rate: number
}

interface Cancellations {
  period: string
  rate: number
  value: number
  excluded: Excluded3
}

interface Metrics {
  sales: Sales
  claims: Claims
  delayed_handling_time: DelayedHandlingTime
  cancellations: Cancellations
}

interface SellerReputation {
  level_id: string
  power_seller_status: string
  transactions: Transactions
  metrics: Metrics
}

interface Eshop {
  eshop_id: number
  seller: number
  nick_name: string
  eshop_status_id: number
  site_id: string
  eshop_experience: number
  eshop_rubro?: any
  eshop_locations: any[]
  eshop_logo_url: string
}

interface Seller {
  id: number
  nickname: string
  car_dealer: boolean
  real_estate_agency: boolean
  registration_date: Date
  tags: string[]
  car_dealer_logo: string
  permalink: string
  seller_reputation: SellerReputation
  eshop: Eshop
}

interface Country {
  id: string
  name: string
}

interface State {
  id: string
  name: string
}

interface City {
  id: string
  name: string
}

interface SellerAddress {
  comment: string
  address_line: string
  zip_code: string
  id?: any
  latitude?: any
  longitude?: any
  country: Country
  state: State
  city: City
}

interface Address {
  state_id: string
  state_name: string
  city_id: string
  city_name: string
}

interface ValueStruct {
  number: number
  unit: string
}

interface Struct {
  number: number
  unit: string
}

interface Value {
  id: string
  name: string
  struct: Struct
  source: any
}

interface Attribute {
  id: string
  name: string
  value_id: string
  value_name: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct: ValueStruct
  values: Value[]
  source: any
  value_type: string
}
interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
}

interface DifferentialPricing {
  id: number
}

type VariationsData = Record<string, {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}>

interface Result {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price?: number
  sale_price?: any
  sold_quantity: number
  available_quantity: number
  official_store_id?: number
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  tags: string[]
  shipping: Shipping
  stop_time: Date
  seller: Seller
  seller_address: SellerAddress
  address: Address
  attributes: Attribute[]
  installments: Installments
  winner_item_id?: any
  catalog_listing: boolean
  discounts?: any
  promotions?: any
  inventory_id?: any
  differential_pricing: DifferentialPricing
  variation_id: string
  variation_filters: string[]
  variations_data: VariationsData
}

interface Sort {
  id: string
  name: string
}

interface AvailableSort {
  id: string
  name: string
}

interface PathFromRoot {
  id: string
  name: string
}

interface Value2 {
  id: string
  name: string
  path_from_root: PathFromRoot[]
}

interface Filter {
  id: string
  name: string
  type: string
  values: Value2[]
}

interface Value3 {
  id: string
  name: string
  results: number
}

interface AvailableFilter {
  id: string
  name: string
  type: string
  values: Value3[]
}

export interface SearchResponseOld {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: Paging
  results: Result[]
  sort: Sort
  available_sorts: AvailableSort[]
  filters: Filter[]
  available_filters: AvailableFilter[]
}
