import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPresenters } from './presenters-thunks'

export interface IPresenter {
  name: string
  surname: string
}

interface IPresentersData {
  presenters: IPresenter[]
}

export interface IPresentersInitialState {
  presentersData: IPresenter[]
  isLoading: boolean
}

export const presentersInitialState: IPresentersInitialState = {
  presentersData: [],
  isLoading: false
}

export const presentersSlice = createSlice({
  name: 'presenters',
  initialState: presentersInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPresenters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPresenters.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(fetchPresenters.rejected, (state) => {
        state.isLoading = false
        // TODO: error handling
      })
  }
})

export const presenters = presentersSlice.reducer
