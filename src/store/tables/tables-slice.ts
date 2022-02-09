import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTables } from './fetchTables'
import { createTable } from './createTable'
import { editTable } from './editTable'
import { deleteTable } from './deleteTable'

export interface ITable {
  id: number
  name: string
  active?: boolean
}

interface ITablesData {
  tables: ITable[]
}

export interface ITablesInitialState {
  tablesData: ITable[]
  isTableModalOpen: boolean
  isLoading: boolean
  tableBeingEdited: ITable
  isCreatingNewTable: boolean
}

export const tablesInitialState: ITablesInitialState = {
  tablesData: [],
  isTableModalOpen: false,
  isLoading: false,
  tableBeingEdited: { id: 0, name: '' },
  isCreatingNewTable: false
}

export const tablesSlice = createSlice({
  name: 'tables',
  initialState: tablesInitialState,
  reducers: {
    setIsTableModalOpen: (state, action: PayloadAction<boolean>) => { state.isTableModalOpen = action.payload },
    setTableBeingEdited: (state, action: PayloadAction<ITable>) => { state.tableBeingEdited = action.payload },
    resetTableBeingEdited: (state) => { state.tableBeingEdited = { id: 0, name: '' } },
    setIsCreatingNewTable: (state, action: PayloadAction<boolean>) => { state.isCreatingNewTable = action.payload }
  },
  extraReducers: builder => {
    builder
      // fetchTables
      .addCase(fetchTables.pending, (state) => { state.isLoading = true })
      .addCase(fetchTables.fulfilled, (state, action: PayloadAction<ITablesData>) => {
        state.isLoading = false
        state.tablesData = action.payload.tables
      })
      .addCase(fetchTables.rejected, (state) => { state.isLoading = false })
      // createTables
      .addCase(createTable.pending, (state) => { state.isLoading = true })
      .addCase(createTable.fulfilled, (state, action: PayloadAction<ITablesData>) => {
        state.isLoading = false
        state.tablesData = action.payload.tables
      })
      .addCase(createTable.rejected, (state) => { state.isLoading = false })
      // editTables
      .addCase(editTable.pending, (state) => { state.isLoading = true })
      .addCase(editTable.fulfilled, (state, action: PayloadAction<ITablesData>) => {
        state.isLoading = false
        state.tablesData = action.payload.tables
      })
      .addCase(editTable.rejected, (state) => { state.isLoading = false })
      // deleteTables
      .addCase(deleteTable.pending, (state) => { state.isLoading = true })
      .addCase(deleteTable.fulfilled, (state, action: PayloadAction<ITablesData>) => {
        state.isLoading = false
        state.tablesData = action.payload.tables
      })
      .addCase(deleteTable.rejected, (state) => { state.isLoading = false })
  }
})

export const {
  setIsTableModalOpen,
  setTableBeingEdited,
  resetTableBeingEdited,
  setIsCreatingNewTable
} = tablesSlice.actions

export const tables = tablesSlice.reducer
