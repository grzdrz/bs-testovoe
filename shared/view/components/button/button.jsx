/* eslint-disable react/prop-types */
import React from 'react';

import './button.scss';

function Button(props) {
  const {
    text,
    onClick,
  } = props;

  return (
    <button
      className="button"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
