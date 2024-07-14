import  { useRef, useEffect } from 'react';

const UserBarPopover = ({ onClose }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={popoverRef} className="popover">
      <button onClick={() => console.log('Open UserSettingsModal')}>Settings</button>
      <button onClick={() => console.log('Open LogOutModal')}>Log out</button>
    </div>
  );
};

export default UserBarPopover;