import Navigation from 'src/components/Navigation/Navigation.jsx';
import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import UsersNav from 'src/components/Users/UsersNav/UsersNav.jsx';
import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <WelcomeSection />
      <AdvantagesSection />
      {/* <Navigation />
      <UsersNav />
      <SignUpForm /> */}
    </div>
  );
};

export default HomePage;
