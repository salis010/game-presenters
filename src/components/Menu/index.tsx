import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MenuItem } from './MenuItem'
import { setCurrentPage } from '../../store/ui/ui-slice'

export const Menu: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname))
  })

  return (
    <nav className='flex my-12'>
      <MenuItem text='Schedule' to='/' />
      <MenuItem text='Tables' to='/tables' />
      <MenuItem text='Presenters' to='/presenters' />
    </nav>
  )
}
