import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUIInitialState } from './ui/ui-slice'
import { presenters, presentersInitialState, IPresentersInitialState } from './presenters/presenters-slice'
import { tables, tablesInitialState, ITablesInitialState } from './tables/tables-slice'

export interface IState {
  ui: IUIInitialState
  presenters: IPresentersInitialState
  tables: ITablesInitialState
}

const initialState: IState = {
  ui: uiInitialState,
  presenters: presentersInitialState,
  tables: tablesInitialState
}

const reducer = {
  ui,
  presenters,
  tables
}

const initStore = (preloadedState = initialState): EnhancedStore => configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const store = initStore(initialState)
