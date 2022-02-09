import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initializeSchedule } from './initializeSchedule'
import { IPresenter } from '../presenters/presenters-slice'
import { ITable } from '../tables/tables-slice'

interface IPagination {
  totalPages: number
  currentPage: number
  timeSlotsPerPage: number
}
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

export interface IScheduleInitialState {
  timeSlots: ITimeSlot[]
  schedule: IGamePresenter[]
  pagination: IPagination
  isLoading: boolean
}

export const scheduleInitialState: IScheduleInitialState = {
  timeSlots: [],
  schedule: [],
  pagination: {
    totalPages: 0,
    currentPage: 0,
    timeSlotsPerPage: 6
  },
  isLoading: false
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: scheduleInitialState,
  reducers: {
    setTimeSlots: (state, action: PayloadAction<ITimeSlot[]>) => {
      state.timeSlots = action.payload
      state.pagination.totalPages = action.payload.length / state.pagination.timeSlotsPerPage
    },
    setSchedule: (state, action: PayloadAction<IGamePresenter[]>) => { state.schedule = action.payload },
    setTotalPages: (state, action: PayloadAction<number>) => { state.pagination.totalPages = action.payload },
    setCurrentPage: (state, action: PayloadAction<number>) => { state.pagination.currentPage = action.payload }
  },
  extraReducers: builder => {
    builder
      // initializeSchedule
      .addCase(initializeSchedule.pending, (state) => { state.isLoading = true })
      .addCase(initializeSchedule.fulfilled, (state) => { state.isLoading = false })
      .addCase(initializeSchedule.rejected, (state) => { state.isLoading = false })
  }
})

export const {
  setTimeSlots,
  setSchedule,
  setTotalPages,
  setCurrentPage
} = scheduleSlice.actions

export const schedule = scheduleSlice.reducer
