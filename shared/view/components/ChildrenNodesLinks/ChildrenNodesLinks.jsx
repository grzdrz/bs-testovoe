import React from 'react';
/* import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'; */

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import Button from '../Button/Button.jsx';
import './ChildrenNodesLinks.scss';

const ChildrenNodesLinks = () => {
  /* const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentRouteNode = routeTree.find(location.pathname); */

  const { currentNode } = useCurrentNode();

  return (
    <div className="children-nodes-links">
      <p className="children-nodes-links__title">Children nodes</p>
      <div className="children-nodes-links__links">
        {currentNode.nodes.map((node) => (
          <div className="children-nodes-links__link" key={node.route}>
            <Button
              to={node.route}
              text={`to ${node.title}`}
              hasArrow
              arrowDirection="down"
            >
              {node.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildrenNodesLinks;
