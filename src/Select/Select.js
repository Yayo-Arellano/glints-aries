import React, { Component } from 'react';
import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
} from '../Style/SelectStyle';

class Select extends Component <Props, State> {
  state = {
    floating: false,
  }

  handleFocusChange = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      ...defaultProps
    } = this.props;

    const { floating } = this.state;

    return (
      <TextFieldContainer className={className}>
        <TextFieldInput
          type="text"
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          floating={floating}
          value={value}
          {...defaultProps}
        />
        <TextFieldLabel floating={floating} status={status}>
          {label}
        </TextFieldLabel>
      </TextFieldContainer>
    );
  }
}

type Props = {
  label: string,
  status: string,
  disabled: boolean,
  className: string,
}

type State = {
  floating: boolean,
};

export default Select;
