import React from 'react';
import Modal from 'src/components/Modals/Modal/Modal.jsx';
import UserSettingsModal from 'src/components/Modals/Modal/UserSettingsModal/UserSettingsModal.jsx';

const ModalsPage = () => {
  return (
    <div>
      <Modal>
        <UserSettingsModal />
      </Modal>
    </div>
  );
};

export default ModalsPage;
