import React, { FunctionComponent, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InputText } from './common/InputText'
import { Button } from './common/Button'
import { setIsPresenterModalOpen } from '../store/presenters/presenters-slice'
import { createPresenter } from '../store/presenters/createPresenter'

export const PresenterModal: FunctionComponent = () => {
  const [formState, setFormState] = useState({
    name: '',
    surname: ''
  })
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  const dispatch = useDispatch()

  const textChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    let text = (event.target.value).replace(/\d/g, '').replace(/\s\s+/g, ' ')

    if (text.length > 0) {
      text = text[0].toUpperCase() + text.slice(1)
    }

    setFormState({
      ...formState,
      [event.target.name.toLowerCase()]: text
    })
  }

  const createPresenterHandler = (event: FormEvent): void => {
    event.preventDefault()

    const newPresenter = {
      name: formState.name.trim(),
      surname: formState.surname.trim()
    }

    dispatch(createPresenter(newPresenter))
    dispatch(setIsPresenterModalOpen(false))
  }

  const closePresenterModalHandler = (): void => {
    dispatch(setIsPresenterModalOpen(false))
  }

  useEffect(() => {
    setIsFormDisabled(formState.name.length < 2 || formState.surname.length < 2)
  }, [formState])

  return (
    <form
      className='flex flex-col w-full p-8 border-4 border-presenter-200'
      onSubmit={createPresenterHandler}
    >
      <InputText labelName='Name' value={formState.name} changeHandler={textChangeHandler} />
      <InputText labelName='Surname' value={formState.surname} changeHandler={textChangeHandler} />
      <div className='flex justify-between'>
        <Button
          name='Cancel'
          type='button'
          clickHandler={closePresenterModalHandler}
          colorStyle='border-4 border-presenter-200 text-presenter-200 bg-secondary-50'
          size='w-1/3'
        />
        <Button
          name='Add'
          type='submit'
          colorStyle='bg-presenter-200 text-secondary-50'
          size='w-1/3'
          disabled={isFormDisabled}
        />
      </div>
    </form>
  )
}
