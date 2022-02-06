import React, { FunctionComponent } from 'react'
import { EditIcon } from '../images/EditIcon'
import { CloseIcon } from '../images/CloseIcon'
import { useDispatch } from 'react-redux'
import { editPresenter } from '../store/presenters/editPresenter'
import { deletePresenter } from '../store/presenters/deletePresenter'
import { IPresenter } from '../store/presenters/presenters-slice'

export const Presenter: FunctionComponent<IPresenter> = ({ id, name, surname }) => {
  const dispatch = useDispatch()

  const editPresenterHandler = (): void => {
    const editedPresenterData = { id: 2, name: 'Svetlana', surname: 'Zaminova' }
    dispatch(editPresenter(editedPresenterData))
  }

  const deletePresenterHandler = (): void => {
    const deletePresenterId = 2
    dispatch(deletePresenter(deletePresenterId))
  }

  return (
    <li
      key={id}
      className={`p-4 text-3xl text-secondary-50 ${id % 2 === 0 ? 'bg-presenter-100' : 'bg-presenter-50'}`}
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
