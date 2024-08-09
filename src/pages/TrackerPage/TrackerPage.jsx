import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';

import css from './TrackerPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';

const TrackerPage = () => {
  return (
    <Container type="section" className={css.trackerPageContainer}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default TrackerPage;
