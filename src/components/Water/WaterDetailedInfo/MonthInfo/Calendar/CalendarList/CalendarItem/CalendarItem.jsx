const CalendarItem = ({ day }) => {
  // const { date, waterConsumption, dailyNorm } = day;
  // const percentage = (waterConsumption / dailyNorm) * 100;

  return (
    <button>
      <span>{day}</span>
    </button>
  );
};

export default CalendarItem;
