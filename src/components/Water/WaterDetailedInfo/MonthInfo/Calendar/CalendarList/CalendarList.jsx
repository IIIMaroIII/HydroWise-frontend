import { useSelector } from 'react-redux';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
import { selectDate, selectMonthlyWaterItems } from 'src/redux/water/selectors.js';
// import { FaUpLong } from 'react-icons/fa6';
import { daysInMonth } from 'src/utils/daysInMonth.js';
import { parseDate } from 'src/utils/parseDate.js';
import css from './calendarList.module.css'

const CalendarList = () => {
  const selectedDate = useSelector(selectDate);
  const { month, year} = parseDate(selectedDate);
  const days = daysInMonth(month, year);
  const waterData = useSelector(selectMonthlyWaterItems);
  return (
    <ul className={css.list}>
      {days.map((day, index) => {
        const dayNumber = day.getDate();
        const dayData = waterData.find(item => item.day === dayNumber);
        const totalVolume = dayData ? dayData.totalVolume : 0;

        return <CalendarItem key={index} day={day} totalVolume={totalVolume} />;
      })}
    </ul>
  );
}



export default CalendarList;
