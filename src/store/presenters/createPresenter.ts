import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRESENTERS_ENDPOINT } from '../../constants/endpoints'

interface INewPresenter {
  name: string
  surname: string
}

export const createPresenter = createAsyncThunk('presenters/createPresenter', async (newPresenter: INewPresenter) => {
  const data = (await fetch(PRESENTERS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPresenter)
  })).json()

  return await data
})
