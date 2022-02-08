import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { TimeSlot } from './TimeSlot'
import { Paginator } from './Paginator'
import { IState } from '../../store'

export const Schedule: FunctionComponent = () => {
  const { timeSlots } = useSelector((state: IState) => state.schedule)
  const timeSlotsPerDisplay = 6
  const timeSlotsToDisplay = timeSlots.slice(0, timeSlotsPerDisplay)

  return (
    <div className='flex flex-col w-[900px]  items-center'>
      <div className='flex'>
        {timeSlotsToDisplay.map(timeSlot => <TimeSlot key={timeSlot.index} {...timeSlot} />)}
      </div>
      <Paginator />
    </div>
  )
}
