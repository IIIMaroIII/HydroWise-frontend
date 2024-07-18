import { useSelector } from 'react-redux';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
import { selectDate } from 'src/redux/water/selectors.js';
// import { FaUpLong } from 'react-icons/fa6';
import { daysInMonth } from 'src/utils/daysInMonth.js';
import { parseDate } from 'src/utils/parseDate.js';
import css from './calendarList.module.css'

const CalendarList = () => {
  const selectedDate = useSelector(selectDate);
  const { month, year} = parseDate(selectedDate);
   const days = daysInMonth(month, year);
  return (
    <ul className={css.list}>
      {
        days.map((day, index) => {
              return (<CalendarItem key={index} day={day}/>)
          })} 
    </ul>
  );
}



export default CalendarList;
