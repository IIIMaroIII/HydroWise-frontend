import css from './WaterMainInfo.module.css';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';

const WaterMainInfo = () => {
  return (
    <section className={css.section_WaterMainInfo_wrapper}>
      <Logo/>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn />
    </section>
  );
};

export default WaterMainInfo;
