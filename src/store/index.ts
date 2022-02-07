import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { presenters, presentersInitialState, IPresentersInitialState } from './presenters/presenters-slice'
import { tables, tablesInitialState, ITablesInitialState } from './tables/tables-slice'

export interface IState {
  presenters: IPresentersInitialState
  tables: ITablesInitialState
}

const initialState: IState = {
  presenters: presentersInitialState,
  tables: tablesInitialState
}

const reducer = {
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
