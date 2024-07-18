// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
// import css from './calendarItem.module.css';
// import { parseDate } from 'src/utils/parseDate';
// import { selectDate } from 'src/redux/water/selectors';
// import { changeChosenDate } from 'src/redux/water/slice';
import css from './calendarItem.module.css'
import { selectMonthlyWaterItems } from 'src/redux/water/selectors';
import { selectUser } from 'src/redux/users/selectors';
import { changeChosenDate } from 'src/redux/water/slice';
export const CalendarItem = ({ day }) => {

  const water = useSelector(selectMonthlyWaterItems);
  const user = useSelector(selectUser);
  const percentage=(water.totalVolume / (user.dailyNorma * 1000)) * 100;
  const dispatch = useDispatch();

  const handleClick = () => {
    const localDate = new Date(day.getTime() - (day.getTimezoneOffset() * 60000));
    const isoLocalDate = localDate.toISOString().split('T')[0];
  
    dispatch(changeChosenDate(isoLocalDate));
  };
  return (
    <>
      <li className={css.item}>
        <Button addClass={css.btn_item} onClick={handleClick}>{day.getDate()}</Button> 
        {!water.totalVolume ? <p> 0 %</p>: <p>{`${percentage}%`}</p>}
      </li>
      
    </>
  );
};

export default CalendarItem;
