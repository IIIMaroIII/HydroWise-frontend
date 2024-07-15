import { useState, useRef } from 'react';
import css from './waterForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { IoAddOutline } from 'react-icons/io5';
import { IoRemoveOutline } from 'react-icons/io5';
import Button from '../Button/Button';
const WaterForm = () => {
  const [amount, setAmount] = useState(50);
  const buttonAddWater = useRef(null);
  const buttonSubtractWater = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
    setValue,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const getCurrentTime = () => {
    const now = new Date();
    return {
      now: now,
      hours: String(now.getHours()).padStart(2, '0'),
      minutes: String(now.getMinutes()).padStart(2, '0'),
    };
  };
  const { now, hours, minutes } = getCurrentTime();

  let waterAmount = watch('waterValue', '');

  const onSubmit = ({ waterValue }) => {
    console.log('Submitted data:', {
      time: now,
      waterValue: round(waterValue),
    });
  };

  const addWaterAmount = () => {
    let result = (waterAmount += amount);
    buttonSubtractWater.current.disabled = false;
    if (result >= 5000) {
      buttonAddWater.current.disabled = true;
    }
    setValue('waterValue', result);
  };

  const reduceWater = () => {
    let result = (waterAmount -= amount);
    buttonAddWater.current.disabled = false;
    if (result <= 0) {
      buttonSubtractWater.current.disabled = true;
    }
    setValue('waterValue', result);
  };

 function round(number) {
   if (number >= 1000) {
     let liters = number / 1000;
     if (number % 1000 === 0) {
       return `${liters.toFixed(0)}L`;
     } else {
       return `${liters.toFixed(3)}L`;
     }
   } else {
     return `${number}ml`;
   }
 }

  const handleWaterValueChange = evt => {
    const value = Number(evt.currentTarget.value);
    setValue('waterValue', isNaN(value) ? 0 : value);
    setAmount(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.waterControlContainer}>
          <p>Amount of water:</p>
          <div className={css.waterAdjustmentContainer}>
            <button
              type="button"
              onClick={reduceWater}
              className={css.waterAdjustmentBtn}
              ref={buttonSubtractWater}
            >
              <IoRemoveOutline className="subtract-icon" size={16} />
            </button>
            <div className={css.waterAmount}>
              <p className={css.waterAmountDisplay}>{round(waterAmount)}</p>
            </div>
            <button
              type="button"
              className={css.waterAdjustmentBtn}
              onClick={addWaterAmount}
              ref={buttonAddWater}
            >
              <IoAddOutline className="add-icon" size={16} />
            </button>
          </div>
        </div>
        <div className={css.waterInfoContainer}>
          <label className={css.recordingTimeContainer}>
            Recording time:
            <input
              value={`${hours}:${minutes}`}
              {...register('time')}
              className={css.waterInfoField}
            />
          </label>
          <label
            className={`${css.recordingTimeContainer} ${css.waterAmountText}`}
          >
            Enter the value of the water used:
            <Controller
              name="waterValue"
              control={control}
              defaultValue={50}
              render={({ field }) => (
                <input
                  id="waterValue"
                  value={waterAmount}
                  onChange={handleWaterValueChange}
                  className={css.waterInfoField}
                />
              )}
            />
          </label>
        </div>
        <Button className={css.saveBtn}>Save</Button>
      </form>
    </div>
  );
};

export default WaterForm;
