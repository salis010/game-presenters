import React, { FunctionComponent } from 'react'
import { EditIcon } from '../../images/EditIcon'
import { CloseIcon } from '../../images/CloseIcon'
import { useDispatch } from 'react-redux'
import { setPresenterBeingEdited, setisCreatingNewPresenter, setIsPresenterModalOpen, IPresenter } from '../../store/presenters/presenters-slice'
import { deletePresenter } from '../../store/presenters/deletePresenter'

interface IPresenterComponent {
  presenter: IPresenter
  rowNumber: number
}

export const Presenter: FunctionComponent<IPresenterComponent> = ({ presenter, rowNumber }) => {
  const { id, name, surname } = presenter
  const dispatch = useDispatch()

  const editPresenterHandler = (): void => {
    dispatch(setPresenterBeingEdited({ id, name, surname }))
    dispatch(setIsPresenterModalOpen(true))
    dispatch(setisCreatingNewPresenter(false))
  }

  const deletePresenterHandler = (): void => {
    dispatch(deletePresenter(id))
  }

  return (
    <li
      key={id}
      className={`p-4 text-3xl text-secondary-50 ${rowNumber % 2 === 0 ? 'bg-presenter-100' : 'bg-presenter-50'}`}
    >
      <div className='flex justify-between w-full'>
        {name} {surname}
        <div className='flex'>
          <div
            className='mr-8 cursor-pointer'
            onClick={editPresenterHandler}
          >
            <EditIcon />
          </div>
          <div
            className='cursor-pointer'
            onClick={deletePresenterHandler}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </li>
  )
}
