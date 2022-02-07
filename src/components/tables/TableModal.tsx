import React, { FunctionComponent, ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputText } from '../common/InputText'
import { Button } from '../common/Button'
import { setIsTableModalOpen, setTableBeingEdited, resetTableBeingEdited } from '../../store/tables/tables-slice'
import { createTable } from '../../store/tables/createTable'
import { editTable } from '../../store/tables/editTable'
import { IState } from '../../store'

export const TableModal: FunctionComponent = () => {
  const { tableBeingEdited, isCreatingNewTable } = useSelector((state: IState) => state.tables)
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  const dispatch = useDispatch()

  const textChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    let text = (event.target.value).replace(/\d/g, '').replace(/\s\s+/g, ' ')

    if (text.length > 0) {
      text = text[0].toUpperCase() + text.slice(1)
    }

    const newTable = {
      ...tableBeingEdited,
      [event.target.name.toLowerCase()]: text
    }

    dispatch(setTableBeingEdited(newTable))
  }

  const tableHandler = (event: FormEvent): void => {
    event.preventDefault()

    const newTable = {
      name: tableBeingEdited.name.trim()
    }

    isCreatingNewTable
      ? dispatch(createTable(newTable))
      : dispatch(editTable({ id: tableBeingEdited.id, ...newTable }))

    dispatch(setIsTableModalOpen(false))
  }

  const closeTableModalHandler = (): void => {
    dispatch(setIsTableModalOpen(false))
    dispatch(resetTableBeingEdited())
  }

  useEffect(() => {
    setIsFormDisabled(tableBeingEdited.name.length < 2)
  }, [tableBeingEdited])

  return (
    <form
      className='flex flex-col w-full p-8 border-4 border-table-200'
      onSubmit={tableHandler}
    >
      <InputText labelName='Name' value={tableBeingEdited.name} changeHandler={textChangeHandler} />
      <div className='flex justify-between'>
        <Button
          name='Cancel'
          type='button'
          clickHandler={closeTableModalHandler}
          colorStyle='border-4 border-table-200 text-table-200 bg-secondary-50'
          size='w-1/3'
        />
        <Button
          name={isCreatingNewTable ? 'Add' : 'Edit'}
          type='submit'
          colorStyle='bg-table-200 text-secondary-50'
          size='w-1/3'
          disabled={isFormDisabled}
        />
      </div>
    </form>
  )
}
