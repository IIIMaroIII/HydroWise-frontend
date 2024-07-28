import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { changeModal } from 'src/redux/water/slice.js';

const LogoutModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.logoutModal}>
      <div className={css.logoutModalwrapper}>
        <h2 className={css.title}>Log out</h2>
        <p className={css.text}>Do you really want to leave?</p>
        <div className={css.btnWrap}>
          <Button
            addClass={css.logoutModal_logoutBtn}
            onClick={async () => await dispatch(logout())}
            {...otherProps}
          >
            {children || 'Log out'}
          </Button>
          <Button
            addClass={css.logoutModal_cancelBtn}
            onClick={() => dispatch(changeModal(false))}
            {...otherProps}
          >
            {children || 'Cancel'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
