import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../store'

export const Presenters: FunctionComponent = () => {
  const { presentersData } = useSelector((state: IState) => state.presenters)

  return (
    <div>
      <h1>Game Presenters</h1>
      <ul>
        {presentersData.map((presenter, i) => <li key={`${presenter.name}${i}`}>{presenter.name} {presenter.surname}</li>)}
      </ul>
    </div>
  )
}
