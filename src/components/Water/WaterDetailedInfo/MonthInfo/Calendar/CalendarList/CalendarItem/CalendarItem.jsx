// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';

import css from './calendarItem.module.css'
import { selectUser } from 'src/redux/users/selectors';
import { changeChosenDate } from 'src/redux/water/slice';
export const CalendarItem = ({ day, totalVolume }) => {
  const user = useSelector(selectUser);
  const percentage = totalVolume > 0 ? (totalVolume / (user.dailyNorma * 1000)) * 100 : 0;
  const dispatch = useDispatch();

  const handleClick = () => {
    const localDate = new Date(day.getTime() - (day.getTimezoneOffset() * 60000));
    const isoLocalDate = localDate.toISOString().split('T')[0];
    dispatch(changeChosenDate(isoLocalDate));
  };

  return (
    <li className={css.item}>
      <Button addClass={css.btn_item} onClick={handleClick}>{day.getDate()}</Button> 
      <p>{`${Math.round(percentage)}%`}</p>
    </li>
  );
};

export default CalendarItem;
