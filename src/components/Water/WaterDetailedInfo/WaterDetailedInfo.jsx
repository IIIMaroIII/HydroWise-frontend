import UserPanel from 'src/components/Users/UserPanel/UserPanel.jsx';
import css from './WaterDetailedInfo.module.css';
import WaterList from './WaterList/WaterList.jsx';

const WaterDetailedInfo = () => {
  return (
    <div className={css.wrapper}>
      <UserPanel />
      <WaterList />
    </div>
  );
};

export default WaterDetailedInfo;
