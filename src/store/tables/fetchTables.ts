import { createAsyncThunk } from '@reduxjs/toolkit'
import { TABLES_ENDPOINT } from '../../constants/endpoints'

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
  const data = (await (fetch(TABLES_ENDPOINT))).json()

  return await data
})
