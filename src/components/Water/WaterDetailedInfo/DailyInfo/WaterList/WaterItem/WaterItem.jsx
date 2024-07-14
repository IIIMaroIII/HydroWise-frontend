import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';

const WaterItem = ({ item }) => {
  return (
    <>
      <div>
        <FaGlassWater />
        <p>{item.volume}</p>
        <p>{item.date}</p>
      </div>
      <div className={css.btnContainer}>
        <Button
          addClass={css.button}
          onClick={() => {
            console.log('Open edit water modal');
            
          }}
        >
          <FaPen />
        </Button>

        <Button
          addClass={css.button}
          onClick={() => console.log('Open delete water modal')}
        >
          <FaTrash />
        </Button>
      </div>
    </>
  );
};

export default WaterItem;
