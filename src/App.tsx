import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPresenters } from './store/presenters/fetchPresenters'
import { Presenters } from './components/presenters/Presenters'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPresenters())
  }, [])

  return (
    <div className='flex flex-col'>
      <Presenters />
    </div>
  )
}
