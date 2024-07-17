import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import {
  selectIsModalOpen,
  selectIsWaterModalEdit,
  selectIsWaterModalAdd,
  selectIsDeleteWaterModalOpen,
  selectIsLogoutModalOpen,
  selectIsUsersSettingsModalOpen,
} from '../../../redux/water/selectors';
import WaterModal from './WaterModal/WaterModal';
import DeleteWaterModal from './DeleteWaterModal/DeleteWaterModal';
import LogoutModal from './LogoutModal/LogoutModal';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';

const MainModal = () => {
  const waterModalEdit = useSelector(selectIsWaterModalEdit);
  const waterModalAdd = useSelector(selectIsWaterModalAdd);
  const modalsOpen = useSelector(selectIsModalOpen);
  const deleteWaterModal = useSelector(selectIsDeleteWaterModalOpen);
  const logoutModal = useSelector(selectIsLogoutModalOpen);
  const usersSettingsModal = useSelector(selectIsUsersSettingsModalOpen);

  function renderModal() {
    if (waterModalEdit) {
      return <WaterModal operationName="edit" />;
    }
    if (waterModalAdd) {
      return <WaterModal operationName="add" />;
    }
    if (deleteWaterModal) {
      return <DeleteWaterModal />;
    }
    if (logoutModal) {
      return <LogoutModal />;
    }
    if (usersSettingsModal) {
      return <UserSettingsModal />;
    }
  }
  

  return (
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modalsOpen}
        // onRequestClose={close}
        contentLabel="Example Modal"
      >
        {renderModal()}
      </Modal>
    </div>
  );
};

export default MainModal;
