import UserPanel from "src/components/Users/UserPanel/UserPanel"
import css from './WaterDetailedInfo.module.css';
import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";

const WaterDetailedInfo = () => {
  return (
      
      <div className={css.wrapper}>
        <UserPanel></UserPanel>
        <DailyInfo></DailyInfo>
        <MonthInfo></MonthInfo>
      </div>
  )
}

export default WaterDetailedInfo

