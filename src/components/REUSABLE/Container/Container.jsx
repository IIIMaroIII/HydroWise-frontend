import clsx from 'clsx';
import css from './container.module.css';

const Container = ({ children, addClass = '' }) => {
  return <div className={clsx(css.container, addClass)}>{children}</div>;
};

export default Container;

/*
<Container addClass={css.desktop}>
  <div></div>
  <div></div>
</Container>


<Container
  addClass={clsx(css.desktop, css.someAdditionalClass, css.anotherClass)}
>
  <div></div>
  <div></div>
</Container>;


*/
