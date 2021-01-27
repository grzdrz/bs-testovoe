import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import RouteAddingForm from '../../shared/view/components/RouteAddingForm/RouteAddingForm.jsx';
import ChildrenNodesLinks from '../../shared/view/components/ChildrenNodesLinks/ChildrenNodesLinks.jsx';
import ChildrenRoutsTable from '../../shared/view/components/ChildrenRoutsTable/ChildrenRoutsTable.jsx';
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

  const currentNode = routeTree.find(location.pathname);

  return (
    <div className="route-tree-navigation-page">
      <div className="route-tree-navigation-page__list-of-nodes">{`Current route: ${currentNode.route}`}</div>
      <div className="route-tree-navigation-page__central-content">
        <div className="route-tree-navigation-page__children-routs-table">
          <ChildrenRoutsTable />
        </div>
        <div className="route-tree-navigation-page__route-adding-form">
          <RouteAddingForm currentNode={currentNode} />
        </div>
      </div>
      <div className="route-tree-navigation-page__children-nodes-links">
        <ChildrenNodesLinks />
      </div>
    </div>
  );
};

export default RouteTreeNavigationPage;
