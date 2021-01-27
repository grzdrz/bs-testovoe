import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import block from 'bem-cn';

import getPaletteModifier from '../../../helpers/GetPaletteModifier';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './ChildrenRoutsTable.scss';

const b = block('children-routs-table');

const ChildrenRoutsTable = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentNode = routeTree.find(location.pathname);
  const childrenCount = currentNode.nodes.length;

  const cellClasses = `${b('cell')} ${getPaletteModifier(childrenCount, b, 'cell')}`;
  const headCellClasses = `${cellClasses} ${b('cell', { position: 'head' })}`;

  return (
    <div className={b()}>
      <p className={b('title')}>Children routs info</p>
      <div className={b('row')}>
        <div className={headCellClasses}>route</div>
        <div className={headCellClasses}>title</div>
        <div className={headCellClasses}>amount nodes</div>
        <div className={headCellClasses}>delete</div>
      </div>
      {currentNode.nodes.map((node) => (
        <div className={b('row')} key={node.route}>
          <div className={cellClasses}>{node.route}</div>
          <div className={cellClasses}>{node.title}</div>
          <div className={cellClasses}>{node.nodes.reduce((sum) => sum + 1, 0)}</div>
          <div className={cellClasses}>
            <DeleteButton node={node} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildrenRoutsTable;
