import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

function Basis(props) {
  const {
    text,
    children,
    ...restProps
  } = props;

  if (restProps.href || restProps.to) {
    return (
      <Link
        className="button__basis"
        {...restProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="button__basis"
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Basis;
