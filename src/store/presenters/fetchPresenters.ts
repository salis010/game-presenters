import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRESENTERS_ENDPOINT } from '../../constants/endpoints'

export const fetchPresenters = createAsyncThunk('presenters/fetchPresenters', async () => {
  const data = (await (fetch(PRESENTERS_ENDPOINT))).json()

  return await data
})
