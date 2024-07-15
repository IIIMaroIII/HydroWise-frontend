import { CalendarItem } from './CalendarList/CalendarItem/CalendarItem';
import css from './calendar.module.css';

export const Calendar = ({ selectedDate }) => {
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );
  const getCurrentDate = day => {
    const currentDate = new Date();
    currentDate.setDate(day);
    currentDate.setMonth(selectedDate.getMonth());
    currentDate.setFullYear(selectedDate.getFullYear());
    console.log(currentDate);
  };
  return (
    <>
      <ul className={css.list}>
        {daysArray.map(day => (
          <li
            onClick={() => getCurrentDate(day)}
            key={day}
            className={css.item}
          >
            <CalendarItem day={day} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Calendar;
