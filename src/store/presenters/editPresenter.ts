import { createAsyncThunk } from '@reduxjs/toolkit'
import { GAME_PRESENTERS_ENDPOINT } from '../../constants/endpoints'
import { IPresenter } from './presenters-slice'

export const editPresenter = createAsyncThunk('presenters/editPresenter', async (editedPresenterData: IPresenter) => {
  const data = (await fetch(GAME_PRESENTERS_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedPresenterData)
  })).json()

  return await data
})
