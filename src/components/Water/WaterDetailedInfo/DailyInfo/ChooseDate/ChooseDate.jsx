import { parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectDate } from 'src/redux/water/selectors.js';

const ChooseDate = () => {
  const selectedDate = useSelector(selectDate);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sunday',
    'Saturday',
  ];
  const parsedDate = new Date(parseISO(selectedDate));
  const date = new Date();

  const ifToday = () => {
    const formatedDate = date => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    };
    return formatedDate(parsedDate) === formatedDate(date);
  };

  const chosenDay = days[parsedDate.getDay()];

  return (
    <div>{ifToday() ? 'Today' : `${parsedDate.getDate()}, ${chosenDay}`}</div>
  );
};

export default ChooseDate;
