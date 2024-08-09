import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
