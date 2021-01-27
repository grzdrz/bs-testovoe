import React from 'react';

import './Input.scss';

const Input = (props) => {
  const {
    ...restProps
  } = props;

  return (
    <input className="input" {...restProps} />
  );
};

export default Input;
