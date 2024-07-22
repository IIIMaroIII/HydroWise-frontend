import { selectUser } from 'src/redux/users/selectors.js';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
import { useSelector } from 'react-redux';
const UserPanel = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className={css.user_panel}>
      <div>
        Hello, dear{' '}
        {user?.name !== null ? <span>{user.name}</span> : <span>User</span>}
      </div>
      <UserBar />
    </div>
  );
};

export default UserPanel;
