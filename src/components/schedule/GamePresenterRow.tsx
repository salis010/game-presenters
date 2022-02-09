import React, { FunctionComponent } from 'react'
import { IPresenter } from '../../store/presenters/presenters-slice'

interface IGamePresenterRow {
  gamePresenter: IPresenter
}

export const GamePresenterRow: FunctionComponent<IGamePresenterRow> = ({ gamePresenter }) => {
  return (
  // INCOMPLETE
    <div>`${gamePresenter.name} ${gamePresenter.surname}`</div>
  )
}
