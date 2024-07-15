import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const response = await axios.post('/api/logout');
      toast.success('Log out successful!');
      dispatch(clearUserData());
      localStorage.removeItem('token');
      navigate('/home');
    } catch (error) {
      toast.error('Log out failed. Please try again.');
      dispatch(clearUserData());
      localStorage.removeItem('token');
      navigate('/home');
    }
  };

  return (
    <div>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      <button className={css.btn} onClick={onSubmit}>
        Log out
      </button>
      <button className={css.btn} close={() => setOpen(!open)}>
        Cancel
      </button>
    </div>
  );
};

export default LogoutModal;
