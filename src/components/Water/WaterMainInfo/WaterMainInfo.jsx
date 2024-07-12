import { useDispatch, useSelector } from "react-redux";
import css from './WaterMainInfo.module.css';
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";

const WaterMainInfo = () => {
  
  return (
    <div className={css.wrapper}>
          <WaterDailyNorma></WaterDailyNorma>
          <WaterProgressBar></WaterProgressBar>
          <AddWaterBtn></AddWaterBtn>
    </div>
  )
}

export default WaterMainInfo