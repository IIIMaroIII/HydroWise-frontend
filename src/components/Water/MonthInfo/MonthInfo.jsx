import Calendar from "../Calendar/Calendar"
import CalendarPagination from "../CalendarPagination/CalendarPagination"

const MonthInfo = () => {

  return (
    <>
    <button type="button">-</button>
      <h2>Month</h2>
    <button type="button"> + </button>
      <CalendarPagination></CalendarPagination>
      <Calendar></Calendar>
    </>
  )
}

export default MonthInfo
