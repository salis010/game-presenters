import { generateTimeSlots } from './generateTimeSlots'
import { ITimeSlot } from '../store/schedule/schedule-slice'

describe('generateTimeSlot', () => {
  const timeSlots = generateTimeSlots()

  it('generates 72 time slots', () => {
    expect(timeSlots.length).toBe(72)
  })

  describe('generates the expected time slot names', () => {
    const testTimeSlots: Array<[number, ITimeSlot]> = [
      [0, { index: 0, timeSlotName: '06:00 - 06:20' }],
      [2, { index: 2, timeSlotName: '06:40 - 07:00' }],
      [3, { index: 3, timeSlotName: '07:00 - 07:20' }],
      [71, { index: 71, timeSlotName: '05:40 - 06:00' }]
    ]
    it.each(testTimeSlots)('index %i to return %o', (index, slot) => {
      expect(timeSlots[index]).toEqual(slot)
    })
  })
})
