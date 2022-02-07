import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRESENTERS_ENDPOINT } from '../../constants/endpoints'

export const deletePresenter = createAsyncThunk('presenters/deletePresenter', async (id: number) => {
  const data = (await fetch(PRESENTERS_ENDPOINT, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })).json()

  return await data
})
