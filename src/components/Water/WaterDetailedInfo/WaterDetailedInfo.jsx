import UserPanel from 'src/components/Users/UserPanel/UserPanel.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from './MonthInfo/MonthInfo.jsx';
import DailyInfo from './DailyInfo/DailyInfo.jsx';
import { useDispatch } from 'react-redux';
import {
  fetchDailyWater,
  fetchMonthlyWater,
} from 'src/redux/water/operations.js';
import { useEffect } from 'react';
import { refresh } from 'src/redux/users/operations.js';

const WaterDetailedInfo = () => {
  const dispatch = useDispatch();

  const handleRefresh = async () => {
    try {
      const result = await dispatch(refresh()).unwrap();
      console.log('Token refreshed successfully:', result);
    } catch (error) {
      console.error('Failed to refresh token', error);
    }
  };
  return (
    <section className={css.wrapper}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
      <button onClick={handleRefresh}>Refresh Token</button>
    </section>
  );
};

export default WaterDetailedInfo;
