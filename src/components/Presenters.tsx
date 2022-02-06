import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Presenter } from './Presenter'
import { createPresenter } from '../store/presenters/createPresenter'
import { IState } from '../store'

export const Presenters: FunctionComponent = () => {
  const { presentersData } = useSelector((state: IState) => state.presenters)
  const dispatch = useDispatch()

  const createPresenterHandler = (): void => {
    const newPresenter = { name: 'Svetlana', surname: 'Dubrovna' }
    dispatch(createPresenter(newPresenter))
  }

  return (
    <div className='w-[400px]'>
      <ul>
        {presentersData.map((presenter, i) => <Presenter key={presenter.id} {...presenter} />)}
      </ul>
      <button
        onClick={createPresenterHandler}
        className='w-full py-4 mt-2 text-3xl font-bold cursor-pointer bg-presenter-200 text-secondary-50'
      >
        Add presenter
      </button>
    </div>
  )
}
