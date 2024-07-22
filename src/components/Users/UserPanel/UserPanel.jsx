import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
const UserPanel = () => {
  return (
    <div className={css.user_panel}>
      <div>
        Hello, dear <span>User</span>
      </div>
      <UserBar />
    </div>
  );
};

export default UserPanel;
