import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './ChildrenRoutsTable.scss';

const ChildrenRoutsTable = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentRouteNode = routeTree.find(location.pathname);

  return (
    <div className="children-routs-table">
      <div className="children-routs-table__row">
        <div className="children-routs-table__cell children-routs-table__cell_position_head">route</div>
        <div className="children-routs-table__cell children-routs-table__cell_position_head">title</div>
        <div className="children-routs-table__cell children-routs-table__cell_position_head">amount nodes</div>
        <div className="children-routs-table__cell children-routs-table__cell_position_head">delete</div>
      </div>
      {currentRouteNode.nodes.map((node) => (
        <div className="children-routs-table__row">
          <div className="children-routs-table__cell">{node.route}</div>
          <div className="children-routs-table__cell">{node.title}</div>
          <div className="children-routs-table__cell">{node.nodes.reduce((sum) => sum + 1, 0)}</div>
          <div className="children-routs-table__cell">
            <DeleteButton node={node} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildrenRoutsTable;
