import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

function Basis(props) {
  const {
    childrenCount,
    text,
    children,
    ...restProps
  } = props;

  const getPaletteModifier = useCallback((count) => {
    if (count === 1) return 'button__basis_palette_whatsapp';
    if (count > 1) return 'button__basis_palette_gitlab';
    return '';
  }, []);

  if (restProps.href || restProps.to) {
    return (
      <Link
        className={`${b('basis')} ${getPaletteModifier(childrenCount)}`}
        {...restProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${b('basis')} ${getPaletteModifier(childrenCount)}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Basis;
