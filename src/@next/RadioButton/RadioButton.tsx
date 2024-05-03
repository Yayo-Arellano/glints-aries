import React, { ReactNode } from 'react';
import { Colors } from '..';
import { Typography } from '../Typography';
import {
  LabelWrapper,
  RadioButtonInput,
  RadioButtonWrapper,
} from './RadioButtonStyle';

export interface RadioButtonProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: ReactNode;
  helperText?: ReactNode;
  disabled?: boolean;
  name?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * This is a controlled component, so you need to pass in the `checked` and `onChange` prop to make it work.
 */
export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(
    {
      label,
      helperText,
      disabled,
      name,
      checked,
      value,
      onChange,
      ...props
    }: RadioButtonProps,
    ref
  ) {
    const renderLabel = () => {
      if (!label) return null;

      return (
        <Typography
          variant="body1"
          as={typeof label === 'string' ? 'span' : 'div'}
          color={Colors.Neutral.B18}
        >
          {label}
        </Typography>
      );
    };

    const renderHelperText = () => {
      if (!helperText) return null;

      return (
        <Typography
          variant="subtitle2"
          as={typeof label === 'string' ? 'span' : 'div'}
          color={Colors.Neutral.B40}
        >
          {helperText}
        </Typography>
      );
    };

    return (
      <RadioButtonWrapper>
        <RadioButtonInput
          ref={ref}
          disabled={disabled}
          name={name}
          checked={checked}
          value={value}
          type="radio"
          onChange={onChange}
          onMouseDown={e => e.preventDefault()}
          {...props}
        />
        <LabelWrapper data-disabled={disabled}>
          {renderLabel()}
          {renderHelperText()}
        </LabelWrapper>
      </RadioButtonWrapper>
    );
  }
);
