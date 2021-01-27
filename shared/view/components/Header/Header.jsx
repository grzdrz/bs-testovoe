import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import Button from '../Button/Button.jsx';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentRouteNode = routeTree.find(location.pathname);

  const titleText = `Title: ${currentRouteNode && currentRouteNode.title}`;

  return (
    <header className="header">
      <p className="header__title">{titleText}</p>
      {currentRouteNode && currentRouteNode.prevNode
        ? (
          <div className="header__back-link">
            <Button
              to={currentRouteNode.prevNode.route}
              text={`to ${currentRouteNode.prevNode.title}`}
              hasArrow
              arrowDirection="up"
            >
              {`Parent node: ${currentRouteNode.prevNode.title}`}
            </Button>
          </div>
        ) : null}
    </header>
  );
};

export default Header;
