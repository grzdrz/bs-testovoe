import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { /* useHistory, */ useLocation } from 'react-router';
import { Link } from 'react-router-dom';

/* import RouteNodesForm from '../../shared/view/components/routeNodesForm/routeNodesForm.jsx';
import {
  addNode,
  moveBack,
  moveForward,
  removeCurrentNode,
} from '../../redux/routeNodes/actions'; */
import './page4.scss';

const Page4 = (/* props */) => {
  /* const { } = props;
  const history = useHistory(); */
  const location = useLocation();

  const { routeTree } = useSelector((state) => state.routeTree);
  const dispatch = useDispatch();

  const currentRouteNode = routeTree.find(location.pathname);
  /* debugger; */

  return (
    <div className="page">
      <header className="page__header">
        {currentRouteNode.prevNode
          ? (
            <Link to={currentRouteNode.prevNode.route}>
              {currentRouteNode.prevNode.title}
            </Link>
          ) : null}
        <p className="page__title">{currentRouteNode.title}</p>
      </header>
      <div className="page__list-of-nodes">{currentRouteNode.route}</div>
      {currentRouteNode.nodes.map((node) => (
        <Link to={node.route} key={node.route}>
          {node.title}
        </Link>
      ))}
    </div>
  );
};

export default Page4;
