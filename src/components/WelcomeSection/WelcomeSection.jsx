import css from './WelcomeSection.module.css';

import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import { selectUserIsLoggedIn } from '../../redux/users/selectors.js';
import { useSelector } from 'react-redux';

const WelcomeSection = () => {
  const isAuthenticated = useSelector(selectUserIsLoggedIn);

  return (
    <div
      className={clsx(css.homePageWelcomeSection, {
        [css.disabled]: isAuthenticated,
      })}
    >
      <Logo />
      <div
        className={clsx(css.homePageWelcomeSectionContainer, {
          [css.disabled]: isAuthenticated,
        })}
      >
        <p className={css.homePageWelcomeSectionText}>
          Record daily water intake and track
        </p>
        <h1 className={css.homePageWelcomeSectionHeader}>
          Water consumption tracker
        </h1>
        <div className={css.homePageBtns}>
          {!isAuthenticated ? (
            <CustomNavLink
              addClass={css.isActive}
              className={clsx(css.homePageLinks, css.linkTracker)}
              to="/signup"
            >
              Try tracker
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageLinks,
                css.linkTracker,
                css.disabledTracker,
              )}
            >
              Try tracker
            </div>
          )}
          {!isAuthenticated ? (
            <CustomNavLink
              className={clsx(css.homePageLinks, css.linkSignIn)}
              to="/signin"
            >
              Sign In
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageLinks,
                css.linkSignIn,
                css.disabledSignIn,
              )}
            >
              Sign In
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
