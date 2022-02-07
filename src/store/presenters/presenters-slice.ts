import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPresenters } from './fetchPresenters'
import { createPresenter } from './createPresenter'
import { editPresenter } from './editPresenter'
import { deletePresenter } from './deletePresenter'

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
  isPresenterModalOpen: boolean
  isLoading: boolean
}

export const presentersInitialState: IPresentersInitialState = {
  presentersData: [],
  isPresenterModalOpen: false,
  isLoading: false
}

export const presentersSlice = createSlice({
  name: 'presenters',
  initialState: presentersInitialState,
  reducers: {
    setIsPresenterModalOpen: (state, action: PayloadAction<boolean>) => { state.isPresenterModalOpen = action.payload }
  },
  extraReducers: builder => {
    builder
      // fetchPresenters
      .addCase(fetchPresenters.pending, (state) => { state.isLoading = true })
      .addCase(fetchPresenters.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(fetchPresenters.rejected, (state) => { state.isLoading = false })
      // createPresenters
      .addCase(createPresenter.pending, (state) => { state.isLoading = true })
      .addCase(createPresenter.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(createPresenter.rejected, (state) => { state.isLoading = false })
      // editPresenters
      .addCase(editPresenter.pending, (state) => { state.isLoading = true })
      .addCase(editPresenter.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(editPresenter.rejected, (state) => { state.isLoading = false })
      // deletePresenters
      .addCase(deletePresenter.pending, (state) => { state.isLoading = true })
      .addCase(deletePresenter.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(deletePresenter.rejected, (state) => { state.isLoading = false })
  }
})

export const {
  setIsPresenterModalOpen
} = presentersSlice.actions

export const presenters = presentersSlice.reducer
