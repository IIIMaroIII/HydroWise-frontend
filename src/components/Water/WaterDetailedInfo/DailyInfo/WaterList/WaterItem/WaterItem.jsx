import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import { useState } from 'react';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import WaterModal from 'src/components/Modals/Modal/WaterModal/WaterModal.jsx';
import DeleteWaterModal from 'src/components/Modals/Modal/DeleteWaterModal/DeleteWaterModal.jsx';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

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
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
          }}
        >
          <FaPen />
        </Button>
        {modalOpen && <MainModal open={modalOpen} close={setModalOpen} />}

        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
          }}
        >
          <FaTrash />
        </Button>
        {modalDeleteOpen && (
          <MainModal open={modalDeleteOpen} close={setModalDeleteOpen} />
        )}
      </div>
    </>
  );
};

export default WaterItem;
