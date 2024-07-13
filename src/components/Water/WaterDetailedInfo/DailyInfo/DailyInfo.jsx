import AddWaterBtn from '../../WaterMainInfo/AddWaterBtn/AddWaterBtn.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';

const DailyInfo = () => {
  return (
    <>
      <ChooseDate />
      <AddWaterBtn />
      <WaterList />
    </>
  );
};

export default DailyInfo;
