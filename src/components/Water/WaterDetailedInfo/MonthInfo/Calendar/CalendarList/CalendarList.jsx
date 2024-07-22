import { useRef } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
import css from './calendarList.module.css';
import useChosenDate from 'src/hooks/useChosenDate.js';

const CalendarList = () => {
  const { getDaysOfMonth } = useChosenDate();
  const itemRef = useRef([]);

  const target = e => {
    const item = e.target;
  };

  return (
    <ul className={css.list}>
      {getDaysOfMonth().map(day => {
        return <CalendarItem key={day} day={day} target={target} ref={itemRef}/>;
      })}
    </ul>
  );
};

export default CalendarList;
