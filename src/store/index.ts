import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUI } from './ui-slice'
import { presenters, presentersInitialState, IPresentersInitialState } from './presenters/presenters-slice'

export interface IState {
  ui: IUI
  presenters: IPresentersInitialState
}

const initialState: IState = {
  ui: uiInitialState,
  presenters: presentersInitialState
}

const reducer = {
  ui,
  presenters
}

const initStore = (preloadedState = initialState): EnhancedStore => configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const store = initStore(initialState)
