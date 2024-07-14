import Modal from 'react-modal';

const MainModal = ({ children, open, close }) => {
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => close(false)}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default MainModal;
