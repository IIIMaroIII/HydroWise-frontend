import { useState } from 'react';
import { CalendarItem } from './CalendarList/CalendarItem/CalendarItem';
import css from './calendar.module.css';

export const Calendar = ({ selectedDate }) => {
  const [chosenDate, setChosenDate] = useState(null);

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
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
      'default',
      { month: 'long' },
    )} ${currentDate.getFullYear()}`;

    setChosenDate(formattedDate);
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
      {!chosenDate ? null : <b>Chosen date: {chosenDate}</b>}
    </>
  );
};
export default Calendar;
