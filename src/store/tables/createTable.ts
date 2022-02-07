import { createAsyncThunk } from '@reduxjs/toolkit'
import { TABLES_ENDPOINT } from '../../constants/endpoints'

interface INewTable {
  name: string
}

export const createTable = createAsyncThunk('tables/createTable', async (newTable: INewTable) => {
  const data = (await fetch(TABLES_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTable)
  })).json()

  return await data
})
