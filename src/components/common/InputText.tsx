import React, { FunctionComponent, useState, ChangeEventHandler, FocusEvent } from 'react'

interface IInputText {
  labelName: string
  value: string
  changeHandler: ChangeEventHandler<HTMLInputElement>
}

export const InputText: FunctionComponent<IInputText> = ({ labelName, value, changeHandler }) => {
  const [error, setError] = useState('')

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>): void => {
    if (event.target.value.length < 2) {
      setError('This field must have a minimum length of 2 characters')
    }
  }

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>): void => {
    setError('')
  }

  return (
    <div className='flex flex-col mb-16'>
      <label
        className='mb-4 text-3xl'
      >
        {`${labelName}:`}
      </label>
      <input
        className='p-2 text-3xl border-4 border-secondary-100 text-secondary-200'
        name={labelName}
        value={value}
        onChange={changeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <p className='text-alert-50'>
        {error}
      </p>
    </div>
  )
}
