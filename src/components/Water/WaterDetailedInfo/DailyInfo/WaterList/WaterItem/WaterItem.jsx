import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();

  const date = new Date(item.date);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const itemTime = date.toLocaleString('en-US', options);

  return (
    <>
      <div>
        <FaGlassWater />
        <p>{item.volume} ml</p>
        <p>{itemTime}</p>
      </div>
      <div className={css.btnContainer}>
        <Button
          addClass={css.button}
          onClick={() => {
            console.log(changeModal());

            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
          }}
        >
          <FaPen />
        </Button>

        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
          }}
        >
          <FaTrash />
        </Button>
      </div>
    </>
  );
};

export default WaterItem;
