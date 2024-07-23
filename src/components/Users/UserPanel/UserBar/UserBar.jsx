import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import UserBarPopover from './UserBarPopover/UserBarPopover.jsx';
import css from './UserBar.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
const UserBar = () => {
  const user = useSelector(selectUser);
  const btnRef = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    const onClick = e => {
      if (btnRef && !btnRef.current.contains(e.target)) {
        setIsPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  return (
    <div className={css.container}>
      <Button
        onClick={togglePopover}
        addClass={css.user_bar_wrapper}
        ref={btnRef}
      >
        {user?.name !== null ? (
          <span className={css.span}>{user.name}</span>
        ) : (
          <span className={css.span}>User</span>
        )}
        <div className={css.user_avatar}>
          <img
            alt="User Avatar"
            src={
              user?.photoUrl ??
              'https://img.icons8.com/?size=100&id=8VXh2TzKXNG8&format=png&color=000000'
            }
          />
        </div>
        {isPopoverOpen ? (
          <FaAngleUp className={css.arrowIcon} />
        ) : (
          <FaAngleDown className={css.arrowIcon} />
        )}
      </Button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </div>
  );
};

export default UserBar;
