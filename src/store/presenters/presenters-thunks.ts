import { createAsyncThunk } from '@reduxjs/toolkit'
import { GAME_PRESENTERS_ENDPOINT } from '../../constants/endpoints'

export const fetchPresenters = createAsyncThunk('presenters/fetchPresenters', async () => {
  const data = (await (fetch(GAME_PRESENTERS_ENDPOINT))).json()

  return await data
})
