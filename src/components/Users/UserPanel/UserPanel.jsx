import { selectUser } from 'src/redux/users/selectors.js';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
import { useSelector } from 'react-redux';
const UserPanel = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className={css.user_panel}>
      <div className={css.text}>
        <h2>Hello</h2>{' '}
        {user?.name !== null ? (
          <span className={css.span}>, {user.name}!</span>
        ) : (
          <span className={css.span}>, User!</span>
        )}
      </div>
      <UserBar />
    </div>
  );
};

export default UserPanel;
