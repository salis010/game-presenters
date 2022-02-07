import React, { FunctionComponent, MouseEventHandler } from 'react'

interface IButton {
  name: string
  type: 'button' | 'reset' | 'submit' | undefined
  clickHandler?: MouseEventHandler<HTMLButtonElement>
  colorStyle: string
  size?: string
  disabled?: boolean
}

export const Button: FunctionComponent<IButton> = ({
  name,
  clickHandler,
  colorStyle,
  type = 'button',
  size = 'w-full',
  disabled = false
}) => {
  const disabledStyle = disabled ? 'cursor-not-allowed opacity-25' : 'cursor-pointer opacity-100'

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`py-4 mt-2 text-3xl font-bold ${disabledStyle} ${size} ${colorStyle}`}
    >
      {name}
    </button>
  )
}
