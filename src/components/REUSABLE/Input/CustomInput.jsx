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
      //   activated = false,
      error = false,
      ...otherProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInactive, setIsInactive] = useState(true);

    const handleFocus = () => {
      console.log('Input focused');

      setIsFocused(true);
      setIsInactive(false);
    };

    const handleBlur = () => {
      console.log('Input blurred');
      setIsFocused(false);
      setIsInactive(true);
    };

    return (
      <>
        {label ? (
          <label className={clsx(labelClass, css.label)}>
            <input
              ref={ref}
              className={clsx(inputClass, css.input, {
                [css.disabled]: disabled,
                [css.inactive]: isInactive,
                [css.focused]: isFocused,
                // [css.activated]: activated,
                [css.error]: error,
              })}
              type={inputType}
              placeholder={placeHolder}
              name={inputName}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...otherProps}
            />
            {labelName}
          </label>
        ) : (
          <input
            ref={ref}
            className={clsx(inputClass, css.input, {
              [css.disabled]: disabled,
              [css.inactive]: isInactive,
              [css.focused]: isFocused,
              //   [css.activated]: activated,
              [css.error]: error,
            })}
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
