import React from 'react';
import block from 'bem-cn';

import Button from '../Button/Button.jsx';
import './ChildrenLinksList.scss';

const b = block('children-links-list');

const ChildrenLinksList = (props) => {
  const { currentNode } = props;

  return (
    <ul className={b()}>
      {currentNode.nodes.map((node) => (
        <li className={b('link')} key={node.route}>
          <Button
            to={node.route}
            text={`to ${node.title}`}
            hasArrow
            arrowDirection="down"
          >
            {node.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ChildrenLinksList;
