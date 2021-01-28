import React from 'react';
import block from 'bem-cn';

import './Input.scss';

const b = block('input');

const Input = (props) => {
  const {
    ...restProps
  } = props;

  return (
    <input className={b()} {...restProps} />
  );
};

export default Input;
