import React from 'react';
import { Redirect } from 'react-router-dom';
import block from 'bem-cn';

import useCurrentNode from '../../shared/helpers/hooks/useCurrentNode';
import getPaletteModifier from '../../shared/helpers/getPaletteModifier';
import RouteAddingForm from '../../shared/view/components/RouteAddingForm/RouteAddingForm.jsx';
import ChildrenRoutsTable from '../../shared/view/components/ChildrenRoutsTable/ChildrenRoutsTable.jsx';
import './RouteTreeNavigationPage.scss';

const b = block('route-tree-navigation-page');

const RouteTreeNavigationPage = () => {
  const { childrenCount, currentNode } = useCurrentNode();

  if (!currentNode) return <Redirect to="/error" />;
  return (
    <main className={b()}>
      <div className={`${b('list-of-nodes')} ${getPaletteModifier(childrenCount, b, 'list-of-nodes')}`}>
        {`Current route: ${currentNode.route}`}
      </div>
      <div className={`${b('central-content')}`}>
        <div className={`${b('children-routs-table')}`}>
          <ChildrenRoutsTable />
        </div>
        <div className={`${b('route-adding-form')}`}>
          <RouteAddingForm />
        </div>
      </div>
    </main>
  );
};

export default RouteTreeNavigationPage;
