import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import Button from '../Button/Button.jsx';
import './ChildrenNodesLinks.scss';

const ChildrenNodesLinks = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentRouteNode = routeTree.find(location.pathname);

  return (
    <div className="children-nodes-links">
      {currentRouteNode.nodes.map((node) => (
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
  );
};

export default ChildrenNodesLinks;
