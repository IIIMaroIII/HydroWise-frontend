import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import useChosenDate from 'src/hooks/useChosenDate.js';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const { returnAmPmTime } = useChosenDate();

  const checkVolume = () => {
    if (item.volume < 1000) return `${item.volume} ml`;
    if (item.volume >= 1000) return `${item.volume / 1000} L`;
  };

  return (
    <li key={item._id} className={css.item}>
      <svg className={css.iconGlass}>
        <use href={'/sprite.svg#icon-glass'}></use>
      </svg>
      <Container addClass={css.dataWrapper}>
        <p className={css.volume}>{checkVolume()}</p>
        <p className={css.itemTime}>{returnAmPmTime}</p>
      </Container>
      <Container addClass={css.iconsWrapper}>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg className={css.icon}>
            <use href={'/sprite.svg#icon-pen'}></use>
          </svg>
        </Button>

        <p className={css.itemTime}>{returnAmPmTime(item.date)}</p>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg className={css.icon}>
            <use href={'/sprite.svg#icon-trash'}></use>
          </svg>
        </Button>
      </Container>
    </li>
  );
};

export default WaterItem;
