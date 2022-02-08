import React, { FunctionComponent } from 'react'
import { Button } from '../common/Button'

export const Paginator: FunctionComponent = () => {
  const style = 'text-secondary-50 bg-schedule-200 border-t border-r'
  return (
    <div className='flex w-full'>
      <Button name='<<' type='button' colorStyle={style} size='w-1/4' />
      <Button name='<' type='button' colorStyle={style} size='w-1/4' />
      <Button name='>' type='button' colorStyle={style} size='w-1/4' />
      <Button name='>>' type='button' colorStyle={style} size='w-1/4' />
    </div>
  )
}
