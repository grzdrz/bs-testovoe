import React from 'react';
import block from 'bem-cn';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import getPaletteModifier from '../../../helpers/getPaletteModifier';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './ChildrenRoutsTable.scss';

const b = block('children-routs-table');

const ChildrenRoutsTable = () => {
  const { childrenCount, currentNode } = useCurrentNode();

  const cellClasses = `${b('cell')} ${getPaletteModifier(childrenCount, b, 'cell')}`;
  const headCellClasses = `${cellClasses} ${b('cell', { position: 'head' })}`;

  return (
    <div className={b()}>
      <p className={b('title')}>Children routs info</p>
      <div className={b('row')}>
        <div className={headCellClasses}>
          <span className={b('cell-text')}>
            route
          </span>
        </div>
        <div className={headCellClasses}>
          <span className={b('cell-text')}>
            title
          </span>
        </div>
        <div className={headCellClasses}>
          <span className={b('cell-text')}>
            amount nodes
          </span>
        </div>
        <div className={headCellClasses}>
          <span className={b('cell-text')}>
            delete
          </span>
        </div>
      </div>
      {currentNode.nodes.map((node) => (
        <div className={b('row')} key={node.route}>
          <div className={cellClasses}>
            <span className={b('cell-text')}>
              {node.route}
            </span>
          </div>
          <div className={cellClasses}>
            <span className={b('cell-text')}>
              {node.title}
            </span>
          </div>
          <div className={cellClasses}>
            <span className={b('cell-text')}>
              {node.nodes.reduce((sum) => sum + 1, 0)}
            </span>
          </div>
          <div className={cellClasses}>
            <DeleteButton node={node} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildrenRoutsTable;
