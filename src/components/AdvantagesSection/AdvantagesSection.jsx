import css from './AdvantagesSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from 'src/redux/users/selectors';
import { IMAGES } from '../../components/Constants/constants.js';
import {
  changeModal,
  changeUsersSettingsModalOpen,
} from 'src/redux/water/slice';

const AdvantagesSection = () => {
  const isAuthenticated = useSelector(selectUserIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={css.homePageAdvantagesSection}>
      <div className={css.homePageCustomers}>
        <div className={css.homePageCustomersPhotoContainer}>
          <picture
            className={clsx(css.homePageCustomersPhoto, css.firstUserPhoto)}
          >
            <source
              srcSet={`${IMAGES.firstUser1x} 1x, ${IMAGES.firstUser2x} 2x`}
              // media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.firstUserMob1x} 1x, ${IMAGES.firstUserMob2x} 2x`}
              // media="(max-width: 767px)"
            />
            <img
              src={IMAGES.firstUser1x}
              alt="First user"
              // width="47"
              // height="47"
            />
          </picture>
          <picture
            className={clsx(css.homePageCustomersPhoto, css.secondUserPhoto)}
          >
            <source
              srcSet={`${IMAGES.secondUser1x} 1x, ${IMAGES.secondUser2x} 2x`}
              // media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.secondUserMob1x} 1x, ${IMAGES.secondUserMob2x} 2x`}
              // media="(max-width: 767px)"
            />
            <img
              src={IMAGES.secondUser1x}
              alt="Second user"
              // width="47"
              // height="47"
            />
          </picture>
          <picture
            className={clsx(css.homePageCustomersPhoto, css.thirdUserPhoto)}
          >
            <source
              srcSet={`${IMAGES.thirdUser1x} 1x, ${IMAGES.thirdUser2x} 2x`}
              // media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.thirdUserMob1x} 1x, ${IMAGES.thirdUserMob2x} 2x`}
              // media="(max-width: 767px)"
            />
            <img
              src={IMAGES.thirdUser1x}
              alt="Third user"
              // width="47"
              // height="47"
            />
          </picture>
        </div>
        <div className={css.happyCustomersWrapper}>
          Our <span className={css.homePageCustomersSpan}>happy</span> customers
        </div>
      </div>
      <ul className={css.homePageBenefits}>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsHabitDrive,
          )}
        >
          {isAuthenticated ? (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksHabitDrive,
              )}
              to="/tracker"
            >
              <span className={css.homePageBenefitsIcon}></span>
              Habit drive
            </CustomNavLink>
          ) : (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksHabitDrive,
              )}
              to="/signin"
            >
              <span className={css.homePageBenefitsIcon}></span>
              Habit drive
            </CustomNavLink>
          )}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsStatistics,
          )}
        >
          {isAuthenticated ? (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksStatistics,
              )}
              to="/tracker/statistics"
            >
              View statistics
            </CustomNavLink>
          ) : (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksStatistics,
              )}
            >
              View statistics
            </CustomNavLink>
          )}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsSettings,
            {
              [css.homePageBenefitsItemsSettingsActive]: isAuthenticated,
            },
          )}
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
            onclose();
          }}
        >
          Personal rate setting
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
