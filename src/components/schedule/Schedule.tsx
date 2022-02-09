import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { TimeSlot } from './TimeSlot'
import { GamePresenterRow } from './GamePresenterRow'
import { Paginator } from './Paginator'
import { IState } from '../../store'

export const Schedule: FunctionComponent = () => {
  const { timeSlots, schedule } = useSelector((state: IState) => state.schedule)
  const { currentPage, timeSlotsPerPage } = useSelector((state: IState) => state.schedule.pagination)

  const startTimeSlot = currentPage * timeSlotsPerPage
  const endTimeSlot = startTimeSlot + timeSlotsPerPage
  const timeSlotsToDisplay = timeSlots.slice(startTimeSlot, endTimeSlot)

  return (
    <div className='flex flex-col w-[900px]  items-center'>
      <div className='flex'>
        {timeSlotsToDisplay.map(timeSlot => <TimeSlot key={timeSlot.index} {...timeSlot} />)}
      </div>
      {schedule.map((gamePresenter, i) =>
        <GamePresenterRow key={gamePresenter.id} gamePresenter={gamePresenter} />
      )}
      <Paginator />
    </div>
  )
}
