import css from './userSettingsForm.module.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import Button from 'src/components/REUSABLE/Button/Button';

import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors.js';
import { useDispatch } from 'react-redux';

import userSettingsFormValidation from 'src/Validation/Forms/userSettingsForm';

const UsersSettingsForm = ({ isOpen, onClose, onUpdate }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSettingsFormValidation),
    defaultValues: {
      gender: 'woman',
      waterIntake: 1.8,
    },
  });

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('photoUrl', data.photoUrl[0]);
    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('waterIntake', data.waterIntake);

    // dispatch(updateUserSettings(formData));

    reset();
    onClose();
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button addClass={css.apButtonCancel} type="button" onClick={onClose}>
          x
        </Button>
        <div>
          <img
            className={css.photoUrl}
            src={user.photoUrl}
            alt="photoUrl Preview"
          />
          <div className={css.fileWrapper}>
            <input
              className={css.file}
              type="file"
              name="file"
              {...register('photoUrl')}
            />
            <Button addClass={css.uploadPhoto}>Upload a photo</Button>
          </div>

          {errors.photoUrl && <p>{errors.photoUrl.message}</p>}
        </div>
        <div>
          <p className={css.apLabelName}>Your gender identity</p>
          <label className={css.apText}>
            <input
              type="radio"
              name="gender"
              value="woman"
              {...register('gender')}
            />{' '}
            Woman
          </label>
          <label className={css.apText}>
            <input
              type="radio"
              name="gender"
              value="man"
              {...register('gender')}
            />{' '}
            Man
          </label>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div>
          <label className={css.apLabelName}>Your name</label>
          <input className={css.apFrame} type="text" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label className={css.apLabelName}>Email</label>

          <input className={css.apFrame} type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label className={css.apText}>Your weight in kilograms:</label>

          <input
            className={css.apFrame}
            type="number"
            {...register('weight')}
          />
          {errors.weight && <p>{errors.weight.message}</p>}
        </div>
        <div>
          <label className={css.apText}>
            The time of active participation in sports:
          </label>

          <input
            className={css.apFrame}
            type="number"
            {...register('activeTime')}
          />
          {errors.activeTime && <p>{errors.activeTime.message}</p>}
        </div>
        <div>
          <label className={css.apText}>
            The required amount of water in liters per day:
          </label>

          <input
            className={css.apAmount}
            step="0.1"
            type="number"
            {...register('waterIntake')}
          />
          {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
        </div>
        <div>
          <label>Write down how much water you will drink:</label>

          <input
            className={css.apFrame}
            step="0.1"
            type="number"
            {...register('waterIntake')}
          />
          {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
        </div>

        <Button addClass={css.adButton} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
export default UsersSettingsForm;
