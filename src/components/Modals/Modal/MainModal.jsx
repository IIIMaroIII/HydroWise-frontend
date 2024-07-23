import Modal from 'react-modal';
import css from './mainModal.module.css';
import { RxCross1 } from 'react-icons/rx';
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
      return <WaterModal operationType="edit" />;
    }
    if (waterModalAdd) {
      return <WaterModal operationType="add" />;
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
    <Modal
      appElement={document.getElementById('root')}
      isOpen={modal}
      onRequestClose={() => dispatch(changeModal(false))}
      contentLabel="Example Modal"
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {renderModal()}

      <button
        className={css.closeBtn}
        onClick={() => dispatch(changeModal(false))}
      >
        <RxCross1 className={css.crossIcon} />
      </button>
    </Modal>
  );
};

export default MainModal;
