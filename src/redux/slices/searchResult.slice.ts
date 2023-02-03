import { SearchEmptyState } from '../../models'
import { createSlice } from '@reduxjs/toolkit'

export const searchResultSlice = createSlice({
  name:'items',
  initialState: SearchEmptyState,
  reducers: {
    createSearchResult: (state, action) => {
      return action.payload
    },
    resetSearchResult: () => {
      return SearchEmptyState
    }
  }
})

export const { createSearchResult, resetSearchResult } = searchResultSlice.actions
export default searchResultSlice.reducer
