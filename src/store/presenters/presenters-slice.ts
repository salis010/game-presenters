import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPresenters } from './fetchPresenters'
import { createPresenter } from './createPresenter'
import { editPresenter } from './editPresenter'

export interface IPresenter {
  id: number
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
      // fetchPresenters
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
      // createPresenters
      .addCase(createPresenter.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPresenter.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(createPresenter.rejected, (state) => {
        state.isLoading = false
        // TODO: error handling
      })
      // editPresenters
      .addCase(editPresenter.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editPresenter.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(editPresenter.rejected, (state) => {
        state.isLoading = false
        // TODO: error handling
      })
  }
})

export const presenters = presentersSlice.reducer
