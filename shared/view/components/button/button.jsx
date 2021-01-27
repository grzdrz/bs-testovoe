import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import block from 'bem-cn';

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

  const { routeTree } = useSelector((state) => state.routeTree);
  const location = useLocation();
  const currentNode = routeTree.find(location.pathname);
  const childrenCount = currentNode.nodes.length;

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
