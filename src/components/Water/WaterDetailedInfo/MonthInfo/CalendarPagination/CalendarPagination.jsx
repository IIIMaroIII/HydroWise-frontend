// import { useState, useEffect } from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../../../components/REUSABLE/Button/Button';
// import { sprite } from '../../../shared/icons/index';

import css from './calendarPagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'src/redux/water/selectors';
import { parseDate } from 'src/utils/parseDate';
import { changeChosenDate } from 'src/redux/water/slice';
// import { Calendar } from '../Calendar/Calendar';

export const CalendarPagination = () => {
   const selectedDate = useSelector(selectDate);
  
   const { year } = parseDate(selectedDate);
   const dispatch = useDispatch();
   const monthAsName = new Date(selectedDate).toLocaleString('en-US', { month: 'long' });
   
  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      new Date(selectedDate).getFullYear(),
      new Date(selectedDate).getMonth() - 1,
      1
    );
    dispatch(changeChosenDate(previousMonth.toISOString()));
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      new Date(selectedDate).getFullYear(),
      new Date(selectedDate).getMonth() + 1,
      1
    );
    dispatch(changeChosenDate(nextMonth.toISOString()));
  };
  return (
    <div className={css.wrapper}>
      <Button onClick={goToPreviousMonth} className={css.btn}>
       <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>{`${monthAsName}, ${year}`}</span>
      <Button onClick={goToNextMonth} className={css.btn}>
        <BsChevronRight size="12" className={css.arrow} />
      </Button> 
    </div>
  );
};
export default CalendarPagination;