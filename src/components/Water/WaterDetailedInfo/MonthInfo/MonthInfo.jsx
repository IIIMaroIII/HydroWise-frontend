import Calendar from './Calendar/Calendar.jsx';
import CalendarPagination from './CalendarPagination/CalendarPagination.jsx';

const MonthInfo = () => {
  return (
    <div>
      <h1>Month</h1>
      <CalendarPagination />
      <Calendar />
    </div>
  );
};

export default MonthInfo;
