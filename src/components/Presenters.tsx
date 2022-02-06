import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPresenter } from '../store/presenters/createPresenter'
import { editPresenter } from '../store/presenters/editPresenter'
import { deletePresenter } from '../store/presenters/deletePresenter'
import { IState } from '../store'

export const Presenters: FunctionComponent = () => {
  const { presentersData } = useSelector((state: IState) => state.presenters)
  const dispatch = useDispatch()

  const createPresenterHandler = (): void => {
    const newPresenter = { name: 'Svetlana', surname: 'Dubrovna' }
    dispatch(createPresenter(newPresenter))
  }

  const editPresenterHandler = (): void => {
    const editedPresenterData = { id: 2, name: 'Svetlana', surname: 'Zaminova' }
    dispatch(editPresenter(editedPresenterData))
  }

  const deletePresenterHandler = (): void => {
    const deletePresenterId = 2
    dispatch(deletePresenter(deletePresenterId))
  }

  return (
    <div>
      <h1>Game Presenters</h1>
      <ul>
        {presentersData.map((presenter, i) => <li key={`${presenter.name}${i}`}>{presenter.name} {presenter.surname}</li>)}
      </ul>
      <button onClick={createPresenterHandler}>Add presenter</button>
      <button onClick={editPresenterHandler}>Edit presenter</button>
      <button onClick={deletePresenterHandler}>Delete presenter</button>
    </div>
  )
}
