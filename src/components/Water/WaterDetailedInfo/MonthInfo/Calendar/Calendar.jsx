import CalendarList from './CalendarList/CalendarList.jsx';

const Calendar = () => {
  const day = {
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    date: Date.now(),
  };

  return (
    <>
      <CalendarList dayObj={day} />
    </>
  );
};

export default Calendar;
