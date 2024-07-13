import css from './WelcomeSection.module.css';

import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';

const WelcomeSection = () => {
  return (
    <div>
      <p>Record daily water intake and track</p>
      <h1>Water consumption tracker</h1>
      <div className={css.homePageBtn}>
        <CustomNavLink to="/signup">Try tracker</CustomNavLink>
        <CustomNavLink to="/signin">SignIn</CustomNavLink>
      </div>
    </div>
  );
};

export default WelcomeSection;
