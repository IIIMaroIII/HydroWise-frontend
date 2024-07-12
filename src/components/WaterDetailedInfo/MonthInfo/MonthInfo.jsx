// import css from './MonthInfo.module.css';

import { useState } from 'react';

const MonthInfo = () => {
  return <div>
    <h1>&quot;Month&quot;</h1>
    <CalendarPagination />
    <Calendar />
  </div>;

  function CalendarPagination() {
    // Логіка обробки подій та стану
    // Поточна дата (по замовчуванню - поточний місяць)
    const [currentDate, setCurrentDate] = useState(new Date());
    // Форматування дати у форматі "month, YYYY"

  // const formattedDate = currentDate.toLocaleString('default', {
  //   month: 'long',
  //   year: 'numeric',
    // });
    
     // Зміна поточної дати на попередній місяць
  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentDate(previousMonth);
    };
    // Зміна поточної дати на наступний місяць
  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };
  return (
    <div>
      <button onClick={handlePreviousMonth}>&lt;</button>
      <button onClick={handleNextMonth}>&lt;</button>
    </div>
  );
}

  function Calendar() {
  const days = []; // Заповніть реальними даними
  return (
    <div>
      {days.map((day) => (
        <CalendarItem key={day.date} day={day} />
      ))}
    </div>
  );
}
  
  function CalendarItem({ day }) {
  const { date, waterConsumption, dailyNorm } = day;
  const percentage = (waterConsumption / dailyNorm) * 100;

  return (
    <button>
      <span>{date}</span>
      <span style={{ color: percentage > 100 ? 'red' : 'green' }}>
        {percentage.toFixed(2)}%
      </span>
    </button>
  );
}

};

export default MonthInfo;
