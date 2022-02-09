import React, { FunctionComponent } from 'react'
import { ITimeSlot } from '../../store/schedule/schedule-slice'

export const TimeSlot: FunctionComponent<ITimeSlot> = ({ index, timeSlotName }) =>
  <div className='flex w-[150px] border-t border-r items-center justify-center h-24 text-3xl font-bold text-secondary-50 bg-schedule-200'>
    {timeSlotName}
  </div>
