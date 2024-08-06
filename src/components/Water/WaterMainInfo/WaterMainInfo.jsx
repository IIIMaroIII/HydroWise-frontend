import css from './WaterMainInfo.module.css';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import Container from 'src/components/REUSABLE/Container/Container.jsx';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={css.section_WaterMainInfo_wrapper}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </Container>
  );
};

export default WaterMainInfo;
