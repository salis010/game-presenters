import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUIInitialState } from './ui/ui-slice'
import { schedule, scheduleInitialState, IScheduleInitialState } from './schedule/schedule-slice'
import { tables, tablesInitialState, ITablesInitialState } from './tables/tables-slice'
import { presenters, presentersInitialState, IPresentersInitialState } from './presenters/presenters-slice'

export interface IState {
  ui: IUIInitialState
  schedule: IScheduleInitialState
  tables: ITablesInitialState
  presenters: IPresentersInitialState
}

const initialState: IState = {
  ui: uiInitialState,
  schedule: scheduleInitialState,
  tables: tablesInitialState,
  presenters: presentersInitialState
}

const reducer = {
  ui,
  schedule,
  tables,
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
