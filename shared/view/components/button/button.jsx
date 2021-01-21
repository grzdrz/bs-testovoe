import React from 'react';
import { NavLink } from 'react-router-dom';

function Button(props) {
  const {
    path,
  } = props;

  const url = `${path}`;

  return (
    <div>
      <NavLink style={{ width: '100px', height: '50px', border: '1px solid red' }} to={url}>
        TEST_A
      </NavLink>
    </div>
  );
}

export default Button;
