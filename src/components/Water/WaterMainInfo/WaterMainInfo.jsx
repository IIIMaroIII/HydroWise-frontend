import css from './WaterMainInfo.module.css';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';

const WaterMainInfo = () => {
  return (
    <div className={css.wrapper}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
