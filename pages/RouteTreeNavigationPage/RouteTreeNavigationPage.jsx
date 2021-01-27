import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import RouteAddingForm from '../../shared/view/components/RouteAddingForm/RouteAddingForm.jsx';
/* import RouteNodesForm from '../../shared/view/components/routeNodesForm/routeNodesForm.jsx';
import {
  addNode,
  moveBack,
  moveForward,
  removeCurrentNode,
} from '../../redux/routeNodes/actions'; */
import './RouteTreeNavigationPage.scss';

const RouteTreeNavigationPage = () => {
  const location = useLocation();

  const { routeTree } = useSelector((state) => state.routeTree);

  const currentRouteNode = routeTree.find(location.pathname);

  return (
    <div className="route-tree-navigation-page">
      <div className="route-tree-navigation-page__list-of-nodes">{`Current route: ${currentRouteNode.route}`}</div>
      <div className="route-tree-navigation-page__routs-table">...</div>
      <div className="route-tree-navigation-page__route-adding-form">
        <RouteAddingForm />
      </div>
      {currentRouteNode.nodes.map((node) => (
        <Link to={node.route} key={node.route}>
          {node.title}
        </Link>
      ))}
    </div>
  );
};

export default RouteTreeNavigationPage;
