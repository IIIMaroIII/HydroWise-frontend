import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
import sprite from '../../../../assets/pictures/HomePage/sprite.svg';
import css from './MonthInfo.module.css';
import { useState } from 'react';
import ChartComponent from 'src/components/Statistics/ChartComponent';

const MonthInfo = () => {
  const [showChart, setShowChart] = useState(false);

  const handleIconClick = () => {
    setShowChart(!showChart);
  };

  return (
    <>
      <div className={css.wrapper}>
        {showChart ? (
          <h3 className={css.month}>Statistics</h3>
        ) : (
          <h3 className={css.month}>Month</h3>
        )}
        <CalendarPagination />
        <svg
          className={css.monthInfoIcon}
          width="20"
          height="20"
          onClick={handleIconClick}
          style={{ cursor: 'pointer' }}
        >
          <use href={`${sprite}#icon-pie-chart-02`}></use>
        </svg>
      </div>
      {showChart ? <ChartComponent /> : <Calendar />}
    </>
  );
};

export default MonthInfo;
