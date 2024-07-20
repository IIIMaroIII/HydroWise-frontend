import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
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
import { changeModal } from 'src/redux/water/slice.js';

const MainModal = () => {
  const dispatch = useDispatch();
  const waterModalEdit = useSelector(selectIsWaterModalEdit);
  const waterModalAdd = useSelector(selectIsWaterModalAdd);
  const modal = useSelector(selectIsModalOpen);
  const deleteWaterModal = useSelector(selectIsDeleteWaterModalOpen);
  const logoutModal = useSelector(selectIsLogoutModalOpen);
  const usersSettingsModal = useSelector(selectIsUsersSettingsModalOpen);

  const renderModal = () => {
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
  };

  return (
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modal}
        onRequestClose={() => dispatch(changeModal(false))}
        contentLabel="Example Modal"
      >
        {renderModal()}
      </Modal>
    </div>
  );
};

export default MainModal;
