import React from 'react';
import { NavLink } from 'react-router-dom';

import './button.scss';

function Button(props) {
  const {
    path,
    text,
    onClick
  } = props;

  const url = `${path}`;

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
/* <div>
  <NavLink style={{ width: '100px', height: '50px', border: '1px solid red' }} to={url}>
    TEST_A
  </NavLink>
</div> */