import { useDispatch } from 'react-redux';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';

import css from './TrackerPage.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setShowChart } from 'src/redux/chart/slice';

const TrackerPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/tracker/statistics') {
      dispatch(setShowChart(true));
    } else {
      dispatch(setShowChart(false));
    }
  }, [location.pathname, dispatch]);

  return (
    <div className={css.flex}>
      <div className={css.container}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
    </div>
  );
};

export default TrackerPage;
