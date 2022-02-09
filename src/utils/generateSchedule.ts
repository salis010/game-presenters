import { ITable } from '../store/tables/tables-slice'
import { IPresenter } from '../store/presenters/presenters-slice'

export const generateSchedule = (tables: ITable[], presenters: IPresenter[], timeslot: ITimeSlot[]) => {

  // Assumptions: the objective is to maximize table uptime
  // Tables can be infinite, presenters are finite
  // The number of presenters has to be presenters >= (tables + 1) * 3, as such the number of tables will be limited to:
  //    (presenters / 3) - 1
  // a presenter must have a minimum of 1 break per shift, in any time-slot
  // group them to a max of (tables + 1)
  // if tables === 24 (24 is the total number of 20 mins time-slots in a shift)
  //    create two groups:
  //        Group 1: 12 tables with 13 presenters
  //        Group 2: 11 tables with 12 presenters
  // below 24 tables, there will be just 1 group, each presenter rotating
  // from 24 and above, subtract 1 table, divide presenters and tables into 2 gropus, one group will have
  // 1 presenter and 1 table more that the other group
  // Each of this group can keep adding tables (obviously with presenters to satisfy constraint XX above)
  //    up to a point when constraint XX is met again, which will result in a split of this group according to
  //    point XX above.
}
