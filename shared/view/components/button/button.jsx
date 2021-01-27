import React, { useCallback } from 'react';

import Basis from './Basis.jsx';
import './Button.scss';

function Button(props) {
  const {
    text,
    hasArrow,
    arrowDirection,
    ...restProps
  } = props;

  const getArrowDirection = useCallback(() => {
    if (arrowDirection === 'up') return 'button__arrow_direction_up';
    if (arrowDirection === 'down') return 'button__arrow_direction_down';
    return '';
  }, []);

  return (
    <div className="button">
      <Basis
        {...restProps}
      >
        {<span className="button__text">{text}</span>}
        {hasArrow && (<span className={`button__arrow ${getArrowDirection()}`}>arrow_forward</span>)}
      </Basis>
    </div>
  );
}

export default Button;
