import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUIInitialState {
  currentPage: string
}

export const uiInitialState: IUIInitialState = {
  currentPage: ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => { state.currentPage = action.payload }
  }
})

export const {
  setCurrentPage
} = uiSlice.actions

export const ui = uiSlice.reducer
