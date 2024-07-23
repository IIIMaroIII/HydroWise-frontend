import { forwardRef } from 'react';
import css from './button.module.css';
import clsx from 'clsx';

const Button = forwardRef(
  ({
    children,
    addClass = '',
    selected = false,
    disabled = false,
    ...otherProps
  }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          css.btn,
          {
            [css.isSelected]: selected,
            [css.isDisabled]: disabled,
          },
          addClass,
        )}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

export default Button;
