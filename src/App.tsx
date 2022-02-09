import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Menu } from './components/Menu'
import { Schedule } from './components/schedule/Schedule'
import { Presenters } from './components/presenters/Presenters'
import { Tables } from './components/tables/Tables'
import { initializeSchedule } from './store/schedule/initializeSchedule'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeSchedule())
  }, [])

  return (
    <Router>
      <div className='flex flex-col items-center'>
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
