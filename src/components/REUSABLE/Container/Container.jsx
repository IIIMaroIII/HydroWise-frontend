import css from './container.module.css';

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
