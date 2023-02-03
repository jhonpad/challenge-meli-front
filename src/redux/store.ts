import type { Search } from '../models'
import { configureStore } from '@reduxjs/toolkit'
import { searchResultReducer } from './slices'

export interface AppStore {
  searchResult: Search
}

export default configureStore<AppStore>({
  reducer: {
    searchResult: searchResultReducer
  }
})
