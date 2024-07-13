import CalendarItem from './CalendarItem/CalendarItem.jsx';

const CalendarList = ({ dayObj }) => {
  return (
    <div>
      {dayObj.days.map(day => (
        <CalendarItem key={Math.random()} day={day} />
      ))}
    </div>
  );
};

export default CalendarList;
