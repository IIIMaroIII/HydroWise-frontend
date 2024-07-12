import {  useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar"
import { selectUser } from "src/redux/users/selectors";

const UserPanel = () => {
  const user = useSelector(selectUser);
  return (
    <>
          <div>Hello, dear {!user.name ? <p>User</p> : <p>{user.name}</p>}</div>
        <UserBar></UserBar>
    </>
  )
}

export default UserPanel