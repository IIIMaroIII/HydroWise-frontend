import css from './AdvantagesSection.module.css';
import sprite from '../../assets/pictures/HomePage/sprite.svg';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import clsx from 'clsx';
import firstUserMob1x from '../../assets/pictures/HomePage/user-first-mob.webp';
import firstUserMob2x from '../../assets/pictures/HomePage/user-first-mob@2x.webp';
import secondUserMob1x from '../../assets/pictures/HomePage/user-second-mob.webp';
import secondUserMob2x from '../../assets/pictures/HomePage/user-second-mob@2x.webp';
import thirdUserMob1x from '../../assets/pictures/HomePage/user-third-mob.webp';
import thirdUserMob2x from '../../assets/pictures/HomePage/user-third-mob@2x.webp';
import firstUser1x from '../../assets/pictures/HomePage/user-first.webp';
import firstUser2x from '../../assets/pictures/HomePage/user-first@2x.webp';
import secondUser1x from '../../assets/pictures/HomePage/user-second.webp';
import secondUser2x from '../../assets/pictures/HomePage/user-second@2x.webp';
import thirdUser1x from '../../assets/pictures/HomePage/user-third.webp';
import thirdUser2x from '../../assets/pictures/HomePage/user-third@2x.webp';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from 'src/redux/users/selectors';

const AdvantagesSection = ({ onOpenModal }) => {
  const isAuthenticated = useSelector(selectUserIsLoggedIn);

  return (
    <div className={css.homePageAdvantagesSection}>
      <div className={css.homePageCustomers}>
        <div className={css.homePageCustomersPhotoContainer}>
          <picture>
            <source
              srcSet={`${firstUser1x} 1x, ${firstUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${firstUserMob1x} 1x, ${firstUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={firstUser1x}
              className={css.homePageCustomersPhoto}
              alt="First user"
              width="47"
              height="47"
              loading="lazy"
            />
          </picture>
          <picture>
            <source
              srcSet={`${secondUser1x} 1x, ${secondUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${secondUserMob1x} 1x, ${secondUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={secondUser1x}
              className={clsx(css.homePageCustomersPhoto, css.secondUserPhoto)}
              alt="Second user"
              width="47"
              height="47"
              loading="lazy"
            />
          </picture>
          <picture>
            <source
              srcSet={`${thirdUser1x} 1x, ${thirdUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${thirdUserMob1x} 1x, ${thirdUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={thirdUser1x}
              className={clsx(css.homePageCustomersPhoto, css.thirdUserPhoto)}
              alt="Third user"
              width="47"
              height="47"
              loading="lazy"
            />
          </picture>
        </div>
        <div>
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
              <svg className={css.homePageBenefitsIcon} width="8" height="8">
                <use href={`${sprite}#icon-Ellipse-13`}></use>
              </svg>
              Habit drive
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksHabitDrive,
              )}
            >
              <svg className={css.homePageBenefitsIcon} width="8" height="8">
                <use href={`${sprite}#icon-Ellipse-13`}></use>
              </svg>
              Habit drive
            </div>
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
              to="/tracker"
            >
              View statistics
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksStatistics,
              )}
            >
              View statistics
            </div>
          )}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsSettings,
          )}
          onClick={onOpenModal}
        >
          Personal rate setting
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
