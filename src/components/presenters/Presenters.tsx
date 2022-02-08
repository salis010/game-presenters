import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Presenter } from './Presenter'
import { PresenterModal } from './PresenterModal'
import { Button } from '../common/Button'
import { setIsCreatingNewPresenter, setIsPresenterModalOpen } from '../../store/presenters/presenters-slice'
import { IState } from '../../store'

export const Presenters: FunctionComponent = () => {
  const { presentersData, isPresenterModalOpen } = useSelector((state: IState) => state.presenters)
  const dispatch = useDispatch()

  const openPresenterModalHandler = (): void => {
    dispatch(setIsPresenterModalOpen(true))
    dispatch(setIsCreatingNewPresenter(true))
  }

  return (
    <div className='w-[400px]'>
      {!isPresenterModalOpen &&
        <>
          <ul>
            {presentersData.map((presenter, i) => <Presenter key={presenter.id} rowNumber={i} presenter={presenter} />)}
          </ul>
          <Button
            name='Add presenter'
            type='button'
            clickHandler={openPresenterModalHandler}
            colorStyle='bg-presenter-200 text-secondary-50'
          />
        </>}
      {isPresenterModalOpen && <PresenterModal />}
    </div>
  )
}
