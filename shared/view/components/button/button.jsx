import React, { useCallback } from 'react';
import block from 'bem-cn';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import getPaletteModifier from '../../../helpers/GetPaletteModifier';
import Basis from './Basis.jsx';
import './Button.scss';

const b = block('button');

function Button(props) {
  const {
    text,
    hasArrow,
    arrowDirection,
    ...restProps
  } = props;

  const { childrenCount } = useCurrentNode();

  const getArrowDirection = useCallback((direction) => {
    if (!arrowDirection) return '';
    return b('arrow', { direction });
  }, []);

  return (
    <div className={`${b()} ${getPaletteModifier(childrenCount, b)}`}>
      <Basis
        childrenCount={childrenCount}
        {...restProps}
      >
        {<span className={`${b('text')} ${getPaletteModifier(childrenCount, b, 'text')}`}>{text}</span>}
        {hasArrow && (
          <span className={`${b('arrow')} ${getPaletteModifier(childrenCount, b, 'arrow')} ${getArrowDirection(arrowDirection)}`}>
            arrow_forward
          </span>
        )}
      </Basis>
    </div>
  );
}

export default Button;
