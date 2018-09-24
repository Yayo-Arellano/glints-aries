/* @flow */

import React, { Component } from 'react';
import { Container } from '../../Style/CheckboxStyle';

class Checkbox extends Component <Props, State> {
  state = {
    checked: false,
  }

  handleClick = (onClick) => {
    const listener = (e) => {
      const { checked } = this.state;
      this.setState({
        checked: !checked,
      });

      if (onClick !== undefined) {
        return onClick(e);
      }
    };

    return listener;
  }

  render() {
    const {
      id,
      value,
      onClick,
      className,
      ...defaultProps
    } = this.props;

    const { checked } = this.state;

    return (
      <Container
        className={className}
        tabIndex={0}
        role="checkbox"
        aria-labelledby={id}
        aria-checked={checked}
      >
        <input
          type="checkbox"
          id={id}
          value={value}
          onClick={this.handleClick(onClick)}
          {...defaultProps}
        />
        <label htmlFor={id}>
          {value}
        </label>
      </Container>
    );
  }
}

type Props = {
  id: string,
  value: string,
  className: string,
}

type State = {
  checked: boolean,
}

export default Checkbox;