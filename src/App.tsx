import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPresenters } from './store/presenters/fetchPresenters'
import { fetchTables } from './store/tables/fetchTables'
import { Menu } from './components/Menu'
import { Schedule } from './components/schedule/Schedule'
import { Presenters } from './components/presenters/Presenters'
import { Tables } from './components/tables/Tables'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('here')
    dispatch(fetchPresenters())
    dispatch(fetchTables())
  }, [])

  return (
    <Router>
      <div className='flex flex-col'>
        <Menu />
        <Routes>
          <Route path='/' element={<Schedule />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/presenters' element={<Presenters />} />
        </Routes>
      </div>
    </Router>
  )
}
