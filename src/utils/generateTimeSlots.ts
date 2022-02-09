import { ITimeSlot } from '../store/schedule/schedule-slice'

export const generateTimeSlots = (): ITimeSlot[] => {
  const timeSlots: ITimeSlot[] = []
  const timeSlotInMinutes = 20
  const totalSlotsTime = timeSlotInMinutes * 3 * 24
  let startHours = 6
  let startMinutes = 0
  let endHours = 6
  let endMinutes = 0

  for (
    let i = 0, index = 0;
    i < totalSlotsTime;
    i += timeSlotInMinutes, startMinutes += timeSlotInMinutes, index++
  ) {
    if (startMinutes === 60) {
      startMinutes = 0
      startHours += 1

      if (startHours === 24) {
        startHours = 0
      }
    }

    endMinutes = startMinutes + timeSlotInMinutes

    if (endMinutes === 60) {
      endMinutes = 0
      endHours += 1

      if (endHours === 24) {
        endHours = 0
      }
    }

    const startHH = startHours < 10 ? `0${startHours}` : `${startHours}`
    const startMM = startMinutes === 0 ? '00' : `${startMinutes}`
    const endHH = endHours < 10 ? `0${endHours}` : `${endHours}`
    const endMM = endMinutes === 0 ? '00' : `${endMinutes}`

    timeSlots.push({
      index,
      timeSlotName: `${startHH}:${startMM} - ${endHH}:${endMM}`
    })
  }

  return timeSlots
}
