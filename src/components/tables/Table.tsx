import React, { FunctionComponent } from 'react'
import { EditIcon } from '../../images/EditIcon'
import { CloseIcon } from '../../images/CloseIcon'
import { useDispatch } from 'react-redux'
import { setTableBeingEdited, setIsCreatingNewTable, setIsTableModalOpen, ITable } from '../../store/tables/tables-slice'
import { deleteTable } from '../../store/tables/deleteTable'

interface ITableComponent {
  table: ITable
  rowNumber: number
}

export const Table: FunctionComponent<ITableComponent> = ({ table, rowNumber }) => {
  const { id, name } = table
  const dispatch = useDispatch()

  const editTableHandler = (): void => {
    dispatch(setTableBeingEdited({ id, name }))
    dispatch(setIsTableModalOpen(true))
    dispatch(setIsCreatingNewTable(false))
  }

  const deleteTableHandler = (): void => {
    dispatch(deleteTable(id))
  }

  return (
    <li
      key={id}
      className={`p-4 text-3xl text-secondary-50 ${rowNumber % 2 === 0 ? 'bg-table-100' : 'bg-table-50'}`}
    >
      <div className='flex justify-between w-full'>
        {name}
        <div className='flex'>
          <div
            className='mr-8 cursor-pointer'
            onClick={editTableHandler}
          >
            <EditIcon />
          </div>
          <div
            className='cursor-pointer'
            onClick={deleteTableHandler}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </li>
  )
}
