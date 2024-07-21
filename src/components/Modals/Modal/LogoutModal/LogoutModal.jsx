import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from 'src/components/REUSABLE/Button/Button.jsx';

const LogoutModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Logout successful!');
        navigate('/');
      })
      .catch(() => toast.error('Oops, Logout went wrong, please try again!'));
  };

  return (
    <div className={css.logoutModal}>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>

      <div className={css.btnWrap}>
        <Button
          addClass={css.logoutModal_logoutBtn}
          onClick={handleSubmit}
          {...otherProps}
        >
          {children || 'Log out'}
        </Button>
        <Button
          addClass={css.logoutModal_cancelBtn}
          onClick={() => {
            useDispatch(changeLogoutModalOpen(false));
            dispatch(changeModal(false));
          }}
          {...otherProps}
        >
          {children || 'Cancel'}
        </Button>
      </div>
    </div>
  );
};

export default LogoutModal;
