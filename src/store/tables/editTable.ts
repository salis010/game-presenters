import { createAsyncThunk } from '@reduxjs/toolkit'
import { TABLES_ENDPOINT } from '../../constants/endpoints'
import { ITable } from './tables-slice'

export const editTable = createAsyncThunk('tables/editTable', async (editedTableData: ITable) => {
  const data = (await fetch(TABLES_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedTableData)
  })).json()

  return await data
})
