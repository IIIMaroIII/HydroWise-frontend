import WaterItem from './WaterItem/WaterItem.jsx';
import css from '../WaterList/WaterList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterItems } from 'src/redux/water/selectors.js';
import { useEffect } from 'react';
import { fetchDailyWater } from 'src/redux/water/operations.js';

const WaterList = () => {
  const dispatch = useDispatch();
  const dailyItems = useSelector(selectWaterItems);

  useEffect(() => {
    dispatch(fetchDailyWater());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {dailyItems.length === 0 ? (
        <p>You do not have any records!</p>
      ) : (
        dailyItems.map(item => {
          return (
            <li key={item._id} className={css.item}>
              <WaterItem item={item} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default WaterList;
