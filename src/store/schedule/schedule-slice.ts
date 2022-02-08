import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPresenter } from '../presenters/presenters-slice'
import { ITable } from '../tables/tables-slice'

export interface ITimeSlot {
  index: number
  timeSlotName: string
}

interface IPresenterTimeSlot extends ITimeSlot {
  assignedTable: ITable
  status: string
}

interface IGamePresenter extends IPresenter {
  timeslots: IPresenterTimeSlot[]
}

interface IScheduleInitialState {
  timeSlots: ITimeSlot[]
  schedule: IGamePresenter[]
}

export const scheduleInitialState: IScheduleInitialState = {
  timeSlots: [],
  schedule: []
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: scheduleInitialState,
  reducers: {
    setTimeSlots: (state, action: PayloadAction<ITimeSlot[]>) => { state.timeSlots = action.payload },
    setSchedule: (state, action: PayloadAction<IGamePresenter[]>) => { state.schedule = action.payload }
  }
})

export const {
  setTimeSlots,
  setSchedule
} = scheduleSlice.actions

export const schedule = scheduleSlice.reducer
