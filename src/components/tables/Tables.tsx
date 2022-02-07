import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from './Table'
import { TableModal } from './TableModal'
import { Button } from '../common/Button'
import { setIsCreatingNewTable, setIsTableModalOpen } from '../../store/tables/tables-slice'
import { IState } from '../../store'

export const Tables: FunctionComponent = () => {
  const { tablesData, isTableModalOpen } = useSelector((state: IState) => state.tables)
  const dispatch = useDispatch()

  const openTableModalHandler = (): void => {
    dispatch(setIsTableModalOpen(true))
    dispatch(setIsCreatingNewTable(true))
  }

  return (
    <div className='w-[400px]'>
      {!isTableModalOpen &&
        <>
          <ul>
            {tablesData.map((table, i) => <Table key={table.id} rowNumber={i} table={table} />)}
          </ul>
          <Button
            name='Add table'
            type='button'
            clickHandler={openTableModalHandler}
            colorStyle='bg-table-200 text-secondary-50'
          />
        </>}
      {isTableModalOpen && <TableModal />}
    </div>
  )
}
