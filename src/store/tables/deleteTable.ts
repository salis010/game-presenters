import { createAsyncThunk } from '@reduxjs/toolkit'
import { TABLES_ENDPOINT } from '../../constants/endpoints'

export const deleteTable = createAsyncThunk('tables/deleteTable', async (id: number) => {
  const data = (await fetch(TABLES_ENDPOINT, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })).json()

  return await data
})
