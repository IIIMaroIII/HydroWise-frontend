import Container from 'src/components/REUSABLE/Container/Container.jsx';
import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  return (
    <>
      <Container addClass={css.paginationContainer}>
        <h3 className={css.title}>Month</h3>
        <Container addClass={css.paginationWrapper}>
          <CalendarPagination />
          <svg width="20" height="20" style={{ cursor: 'pointer' }}>
            <use href={'/sprite.svg#icon-pie-chart-02'}></use>
          </svg>
        </Container>
      </Container>
      <Calendar />
    </>
  );
};

export default MonthInfo;
