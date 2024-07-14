import { useState } from 'react';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import UserSettingsModal from 'src/components/Modals/Modal/UserSettingsModal/UserSettingsModal.jsx';

const ModalsPage = () => {
  const [open, setOpen] = useState(true); //delete it after
  return (
    <>
      <MainModal open={open}>
        <button>DeleteWaterModal</button>
        <button>LogOutModal</button>
        <button>UserSettingsModal</button>
        <button>WaterModal</button>
        <button></button>
        <UserSettingsModal />
      </MainModal>
    </>
  );
};

export default ModalsPage;
