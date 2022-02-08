import React, { FunctionComponent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTimeSlots } from '../../store/schedule/schedule-slice'
import { generateTimeSlots } from '../../utils/generateTimeSlots'

export const Schedule: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const timeSlots = generateTimeSlots()
    dispatch(setTimeSlots(timeSlots))

    console.log(timeSlots)
  }, [])

  return (
    <h1>Schedule</h1>
  )
}
