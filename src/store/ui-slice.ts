import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUI {
  isSidebarOpen: boolean
}

export const uiInitialState: IUI = {
  isSidebarOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => { state.isSidebarOpen = action.payload }
  }
})

export const {
  setIsSidebarOpen
} = uiSlice.actions

export const ui = uiSlice.reducer
