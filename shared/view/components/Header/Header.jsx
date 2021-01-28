import React from 'react';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import Button from '../Button/Button.jsx';
import './Header.scss';

const Header = () => {
  const { currentNode } = useCurrentNode();

  const titleText = `Title: ${currentNode && currentNode.title}`;

  return (
    <header className="header">
      <p className="header__title">{titleText}</p>
      {currentNode && currentNode.prevNode
        ? (
          <div className="header__back-link">
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
