import React from 'react';

import './Button.scss';

function Button(props) {
  const {
    text,
    onClick,
    ...restProps
  } = props;

  return (
    <button
      className="button"
      {...restProps}
    >
      {text}
    </button>
  );
}

export default Button;
