import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import ChooseDate from "../ChooseDate/ChooseDate"
import WaterList from "../WaterList/WaterList"




const DailyInfo = () => {
  return (<>
      <div>DailyInfo</div>
       <ChooseDate></ChooseDate>
      <AddWaterBtn></AddWaterBtn>
      <WaterList></WaterList>
      </>
  )
}

export default DailyInfo

// "Компонент містить:
// - ChooseDate
// - AddWaterBtn
// - WaterList"