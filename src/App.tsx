import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPresenters } from './store/presenters/fetchPresenters'
import { fetchTables } from './store/tables/fetchTables'
import { Presenters } from './components/presenters/Presenters'
import { Tables } from './components/tables/Tables'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPresenters())
    dispatch(fetchTables())
  }, [])

  return (
    <div className='flex flex-col'>
      <Presenters />
      <Tables />
    </div>
  )
}
