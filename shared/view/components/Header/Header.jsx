import React from 'react';
import block from 'bem-cn';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import Button from '../Button/Button.jsx';
import './Header.scss';

const b = block('header');

const Header = () => {
  const { currentNode } = useCurrentNode();

  const titleText = `Title: ${currentNode && currentNode.title}`;

  return (
    <header className={b()}>
      <p className={b('title')}>{titleText}</p>
      {currentNode && currentNode.prevNode
        ? (
          <div className={b('back-link')}>
            <Button
              to={currentNode.prevNode.route}
              text={`to ${currentNode.prevNode.title}`}
              hasArrow
              arrowDirection="up"
            >
              {`Parent node: ${currentNode.prevNode.title}`}
            </Button>
          </div>
        ) : null}
    </header>
  );
};

export default Header;
