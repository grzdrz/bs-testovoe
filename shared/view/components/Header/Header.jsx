import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
  const { } = props;
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentRouteNode = routeTree.find(location.pathname);

  const titleText = `Title: ${currentRouteNode && currentRouteNode.title}`;

  return (
    <header className="header">
      <p className="header__title">{titleText}</p>
      {currentRouteNode && currentRouteNode.prevNode
        ? (
          <Link className="header__back-link" to={currentRouteNode.prevNode.route}>
            {`Parent node: ${currentRouteNode.prevNode.title}`}
          </Link>
        ) : null}
    </header>
  );
};

export default Header;
