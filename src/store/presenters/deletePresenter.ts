import { createAsyncThunk } from '@reduxjs/toolkit'
import { GAME_PRESENTERS_ENDPOINT } from '../../constants/endpoints'

export const deletePresenter = createAsyncThunk('presenters/deletePresenter', async (id: number) => {
  const data = (await fetch(GAME_PRESENTERS_ENDPOINT, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })).json()

  return await data
})
