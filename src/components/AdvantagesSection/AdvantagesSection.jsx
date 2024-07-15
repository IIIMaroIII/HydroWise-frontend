import css from './AdvantagesSection.module.css';
import sprite from '../../assets/pictures/HomePage/sprite.svg';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';

const AdvantagesSection = () => {
  return (
    <div className={css.homePageAdvantagesSection}>
      <div className={css.homePageCustomers}>
        Our <span className={css.homePageCustomersSpan}>happy</span> customers
      </div>
      <ul className={css.homePageBenefits}>
        <li className={css.homePageBenefitsHabitDrive}>
          <svg className={css.homePageBenefitsIcon} width="8" height="8">
            <use href={`${sprite}#icon-Ellipse-13`}></use>{' '}
          </svg>
          <div>Habit drive</div>
        </li>
        <li className={css.homePageBenefitsStatistics}>
          <CustomNavLink to="/tracker">View statistics</CustomNavLink>
        </li>
        <li className={css.homePageBenefitsSettings}>Personal rate setting</li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
