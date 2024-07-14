import WaterItem from './WaterItem/WaterItem.jsx';
import css from '../WaterList/WaterList.module.css';

const WaterList = () => {
  // const dailyItems = useSelector(selectWaterItems);
  const dailyItems = [
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
    { volume: '250ml', date: '7:00am' },
  ];

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
