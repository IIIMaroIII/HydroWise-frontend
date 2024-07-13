import { useSelector } from 'react-redux';

import { selectUser } from 'src/redux/users/selectors';
import UserBar from './UserBar/UserBar.jsx';

const UserPanel = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div>Hello, dear {!user.name ? <p>User</p> : <p>{user.name}</p>}</div>
      <UserBar />
    </>
  );
};

export default UserPanel;
