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

import useAuth from 'src/hooks/usAuth.js';

const WaterDetailedInfo = () => {
  const { isUserRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUserRefreshing) return;
    dispatch(fetchDailyWater())
      .unwrap()
      .then(() => dispatch(fetchMonthlyWater()));
  }, [dispatch, isUserRefreshing]);

  return (
    <section className={css.wrapper}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </section>
  );
};

export default WaterDetailedInfo;
