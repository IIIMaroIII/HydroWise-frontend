import { useSelector } from 'react-redux';

import { selectUser, selectUserIsLoggedIn } from 'src/redux/users/selectors';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
const UserPanel = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <div className={css.user_panel}>
      <div>
        Hello, dear {isLoggedIn ? <span>{user?.name}</span> : <span>User</span>}
      </div>
      <UserBar />
    </div>
  );
};

export default UserPanel;
