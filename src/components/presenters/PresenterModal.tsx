import React, { FunctionComponent, ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputText } from '../common/InputText'
import { Button } from '../common/Button'
import { setIsPresenterModalOpen, setPresenterBeingEdited, resetPresenterBeingEdited } from '../../store/presenters/presenters-slice'
import { createPresenter } from '../../store/presenters/createPresenter'
import { editPresenter } from '../../store/presenters/editPresenter'
import { IState } from '../../store'

export const PresenterModal: FunctionComponent = () => {
  const { presenterBeingEdited, isCreatingNewPresenter } = useSelector((state: IState) => state.presenters)
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  const dispatch = useDispatch()

  const textChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    let text = (event.target.value).replace(/\d/g, '').replace(/\s\s+/g, ' ')

    if (text.length > 0) {
      text = text[0].toUpperCase() + text.slice(1)
    }

    const newPresenter = {
      ...presenterBeingEdited,
      [event.target.name.toLowerCase()]: text
    }

    dispatch(setPresenterBeingEdited(newPresenter))
  }

  const presenterHandler = (event: FormEvent): void => {
    event.preventDefault()

    const newPresenter = {
      name: presenterBeingEdited.name.trim(),
      surname: presenterBeingEdited.surname.trim()
    }

    isCreatingNewPresenter
      ? dispatch(createPresenter(newPresenter))
      : dispatch(editPresenter({ id: presenterBeingEdited.id, ...newPresenter }))

    dispatch(setIsPresenterModalOpen(false))
  }

  const closePresenterModalHandler = (): void => {
    dispatch(setIsPresenterModalOpen(false))
    dispatch(resetPresenterBeingEdited())
  }

  useEffect(() => {
    setIsFormDisabled(presenterBeingEdited.name.length < 2 || presenterBeingEdited.surname.length < 2)
  }, [presenterBeingEdited])

  return (
    <form
      className='flex flex-col w-full p-8 border-4 border-presenter-200'
      onSubmit={presenterHandler}
    >
      <InputText labelName='Name' value={presenterBeingEdited.name} changeHandler={textChangeHandler} />
      <InputText labelName='Surname' value={presenterBeingEdited.surname} changeHandler={textChangeHandler} />
      <div className='flex justify-between'>
        <Button
          name='Cancel'
          type='button'
          clickHandler={closePresenterModalHandler}
          colorStyle='border-4 border-presenter-200 text-presenter-200 bg-secondary-50'
          size='w-1/3'
        />
        <Button
          name={isCreatingNewPresenter ? 'Add' : 'Edit'}
          type='submit'
          colorStyle='bg-presenter-200 text-secondary-50'
          size='w-1/3'
          disabled={isFormDisabled}
        />
      </div>
    </form>
  )
}
