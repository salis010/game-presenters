import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPresenter } from '../store/presenters/createPresenter'
import { IState } from '../store'

export const Presenters: FunctionComponent = () => {
  const { presentersData } = useSelector((state: IState) => state.presenters)
  const dispatch = useDispatch()

  const clickHandler = (): void => {
    const newPresenter = { name: 'Svetlana', surname: 'Dubrovna' }
    dispatch(createPresenter(newPresenter))
  }

  return (
    <div>
      <h1>Game Presenters</h1>
      <ul>
        {presentersData.map((presenter, i) => <li key={`${presenter.name}${i}`}>{presenter.name} {presenter.surname}</li>)}
      </ul>
      <button onClick={clickHandler}>Add presenter</button>
    </div>
  )
}
