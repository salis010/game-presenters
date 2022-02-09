import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPresenters } from '../presenters/fetchPresenters'
import { fetchTables } from '../tables/fetchTables'
import { setTimeSlots } from './schedule-slice'
import { generateTimeSlots } from '../../utils/generateTimeSlots'
import { generateSchedule } from '../../utils/generateSchedule'

interface IGroup {
  tables: number
  presenters: number
}

export const initializeSchedule = createAsyncThunk('schedule/initializeSchedule', async (_, thunkApi) => {
  const { dispatch } = thunkApi

  Promise.all([
    dispatch(fetchTables()),
    dispatch(fetchPresenters())
  ])
    .then(data => {
      const timeSlots = generateTimeSlots()
      dispatch(setTimeSlots(timeSlots))

      const { tables } = data[0].payload
      const { presenters } = data[1].payload

      // calculate the number of tables that can be served with the current number of presenters
      const presentersPerShift = Math.floor(presenters.length / 3)
      const shifts = [presentersPerShift, presentersPerShift, presenters.length - presentersPerShift * 2]
      const maxTablesPerShift = shifts.map(shift => shift - 1)

      const groupsPerShift = maxTablesPerShift.map((tables, i) => {
        const groups: IGroup[] = []

        if (tables < 24) {
          groups.push({ tables: maxTablesPerShift[i], presenters: shifts[i] })
        } else {
          if (shifts[i] - maxTablesPerShift[i] === 1) {
            maxTablesPerShift[i] -= 1
            const tablesForGroup1 = Math.floor(maxTablesPerShift[i] / 2)
            const presentersForGroup1 = Math.floor(shifts[i] / 2)

            // Check:
            // console.log('Tables:', maxTablesPerShift[i], tablesForGroup1, maxTablesPerShift[i] - tablesForGroup1)
            // console.log('Presenters:', shifts[i], presentersForGroup1, shifts[i] - presentersForGroup1)

            groups.push({ tables: tablesForGroup1, presenters: presentersForGroup1 })
            groups.push({ tables: maxTablesPerShift[i] - tablesForGroup1, presenters: shifts[i] - presentersForGroup1 })
          } else {
            const tablesForGroup1 = Math.floor(maxTablesPerShift[i] / 2)
            const presentersForGroup1 = Math.floor(shifts[i] / 2)

            console.log(shifts[i], presentersForGroup1)

            groups.push({ tables: tablesForGroup1, presenters: presentersForGroup1 })
            groups.push({ tables: maxTablesPerShift[i] - tablesForGroup1, presenters: shifts[i] - presentersForGroup1 })
          }
        }

        return groups
      })

      console.log({ groupsPerShift })

      generateSchedule(tables, presenters, timeSlots)
    })
    .catch(err => console.log(err))
})
