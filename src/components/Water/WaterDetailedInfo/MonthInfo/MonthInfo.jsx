import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
import sprite from '/public/sprite.svg';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
        <div className={css.paginationWrapper}>
          <CalendarPagination />
          <svg
            className={css.monthInfoIcon}
            width="20"
            height="20"
            style={{ cursor: 'pointer' }}
          >
            <use href={`${sprite}#icon-pie-chart-02`}></use>
          </svg>
        </div>
      </div>
      <Calendar />
    </>
  );
};

export default MonthInfo;
