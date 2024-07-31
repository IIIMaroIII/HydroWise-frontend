import Modal from 'react-modal';
import css from './mainModal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import WaterModal from './WaterModal/WaterModal';
import DeleteWaterModal from './DeleteWaterModal/DeleteWaterModal';
import LogoutModal from './LogoutModal/LogoutModal';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';
import { changeModal } from 'src/redux/water/slice.js';
import useModals from 'src/hooks/useModals.js';

const MainModal = ({ children }) => {
  const dispatch = useDispatch();
  const {
    waterModalAdd,
    waterModalEdit,
    modal,
    deleteWaterModal,
    logoutModal,
    usersSettingsModal,
  } = useModals();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '15px',
      boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.6)',
    },
  };

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
    <div className={css.backdrop}>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modal}
        onRequestClose={() => dispatch(changeModal(false))}
        contentLabel="Example Modal"
        overlayClassName={css.modalOverlay}
        // className={css.modalContent}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customStyles}
      >
        {renderModal()}
        {children}

        <button
          className={css.closeBtn}
          onClick={() => dispatch(changeModal(false))}
        >
          <RxCross1 className={css.crossIcon} />
        </button>
      </Modal>
    </div>
  );
};

export default MainModal;
