import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import block from 'bem-cn';

import getPaletteModifier from '../../shared/helpers/GetPaletteModifier';
import RouteAddingForm from '../../shared/view/components/RouteAddingForm/RouteAddingForm.jsx';
import ChildrenNodesLinks from '../../shared/view/components/ChildrenNodesLinks/ChildrenNodesLinks.jsx';
import ChildrenRoutsTable from '../../shared/view/components/ChildrenRoutsTable/ChildrenRoutsTable.jsx';
import './RouteTreeNavigationPage.scss';

const b = block('route-tree-navigation-page');

const RouteTreeNavigationPage = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentNode = routeTree.find(location.pathname);
  const childrenCount = currentNode.nodes.length;

  return (
    <main className="route-tree-navigation-page">
      <div className={`route-tree-navigation-page__list-of-nodes ${getPaletteModifier(childrenCount, b, 'list-of-nodes')}`}>
        {`Current route: ${currentNode.route}`}
      </div>
      <div className="route-tree-navigation-page__central-content">
        <div className="route-tree-navigation-page__children-routs-table">
          <ChildrenRoutsTable />
        </div>
        <div className="route-tree-navigation-page__route-adding-form">
          <RouteAddingForm />
        </div>
      </div>
      <div className="route-tree-navigation-page__children-nodes-links">
        <ChildrenNodesLinks />
      </div>
    </main>
  );
};

export default RouteTreeNavigationPage;
