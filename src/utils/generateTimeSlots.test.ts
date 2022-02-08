import { generateTimeSlots } from './generateTimeSlots'

describe('generateTimeSlot', () => {
  it('generates 72 time slots', () => {
    const timeSlots = generateTimeSlots()

    expect(timeSlots.length).toBe(72)
  })
})
