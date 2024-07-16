import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
  };

  const handleCloseModal = () => setOpen(!open);

  return (
    <div>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      <button className={css.btn} onClick={onLogout}>
        Log out
      </button>
      <button className={css.btn} close={handleCloseModal}>
        Cancel
      </button>
    </div>
  );
};

export default LogoutModal;
