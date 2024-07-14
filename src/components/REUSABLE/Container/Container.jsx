import clsx from 'clsx';
import css from './container.module.css';
import Button from '../Button/Button.jsx';

const Container = ({ children, addClass = '' }) => {
  return <div className={clsx(css.container, addClass)}>{children}</div>;
};

export default Container;
