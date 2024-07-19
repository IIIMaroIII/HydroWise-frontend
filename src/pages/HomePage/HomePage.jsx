import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './HomePage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';
import UserSettingsModal from 'src/components/Modals/Modal/UserSettingsModal/UserSettingsModal';
import { useState } from 'react';

const HomePage = () => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleUpdate = data => {};

  return (
    <Container>
      <div className={css.homePageContainer}>
        <WelcomeSection />
        <AdvantagesSection onOpenModal={handleOpenModal} />
        {/* {isModalOpen && (
          <UserSettingsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onUpdate={handleUpdate}
          />
        )} */}
      </div>
    </Container>
  );
};

export default HomePage;
