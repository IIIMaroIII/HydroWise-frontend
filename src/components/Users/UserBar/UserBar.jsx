import { useState } from "react";
import { useSelector } from "react-redux"
import { selectUser } from "src/redux/users/selectors";
import UserBarPopover from "../UserBarPopover/UserBarPopover";


const UserBar = () => {
    const user = useSelector(selectUser);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
      <>
          <button onClick={togglePopover}>
              {!user.name ? <p>User</p> : <p>{user.name}</p>},
           {!user.avatar ? <p>photo</p> : <img>{user.avatar}</img>}</button>
            {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
      </>
      
  )
}

export default UserBar