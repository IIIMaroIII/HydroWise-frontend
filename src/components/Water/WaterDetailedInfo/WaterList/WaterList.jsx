import { useSelector } from 'react-redux';
import { selectWaterItems } from 'src/redux/water/selectors';
import WaterItem from './WaterItem/WaterItem.jsx';

const WaterList = () => {
  const dailyItems = useSelector(selectWaterItems);
  return (
    <ul>
      {dailyItems.length === 0 ? (
        <p>You do not have any records!</p>
      ) : (
        dailyItems.map(item => {
          return <WaterItem key={item._id} item={item} />;
        })
      )}
    </ul>
  );
};

export default WaterList;
