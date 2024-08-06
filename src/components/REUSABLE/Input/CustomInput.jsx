import clsx from 'clsx';
import css from './customInput.module.css';
import { forwardRef, useState } from 'react';

const CustomInput = forwardRef(
  (
    {
      children,
      label = false,
      labelName = '',
      labelClass = '',
      inputType = 'text',
      inputName = '',
      placeHolder = '',
      inputClass = '',
      disabled = false,
      error = false,
      ...otherProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInactive, setIsInactive] = useState(true);

    const handleFocus = () => {
      setIsFocused(true);
      setIsInactive(false);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setIsInactive(true);
    };

    return (
      <>
        {label ? (
          <label className={clsx(css.label, {}, labelClass)}>
            {labelName}
            <input
              ref={ref}
              className={clsx(
                css.input,
                {
                  [css.disabled]: disabled,
                  [css.inactive]: isInactive,
                  [css.focused]: isFocused,
                  [css.error]: error,
                },
                inputClass,
              )}
              type={inputType}
              placeholder={placeHolder}
              name={inputName}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...otherProps}
            />
            {children}
          </label>
        ) : (
          <input
            ref={ref}
            className={clsx(
              css.input,
              {
                [css.disabled]: disabled,
                [css.inactive]: isInactive,
                [css.focused]: isFocused,
                [css.error]: error,
              },
              inputClass,
            )}
            type={inputType}
            placeholder={placeHolder}
            name={inputName}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...otherProps}
          />
        )}
        {children}
      </>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
