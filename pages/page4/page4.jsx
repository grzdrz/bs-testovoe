import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import RouteNodesForm from '../../shared/view/components/routeNodesForm/routeNodesForm.jsx';
import {
  addNode,
  moveBack,
  moveForward,
  removeCurrentNode,
} from '../../redux/routeNodes/actions';
import './page4.scss';

const Page4 = (props) => {
  const { } = props;
  const history = useHistory();
  const location = useLocation();

  const routeNodes = useSelector((state) => state.routeNodes);
  const dispatch = useDispatch();

  /* const handleClick = () => {
    dispatch(addNode({
      route: 'route',
      title: 'title',
    }));
  };
  const handleClick2 = () => {
    dispatch(removeCurrentNode());
  };
  const handleClick3 = (event) => {
    event.preventDefault();
    const form = document.querySelector('.move-forward-form');
    const formData = new FormData(form);
    const inputText = formData.get('moveForwardInput');

    dispatch(moveForward(inputText));
  };
  const handleClick4 = () => {
    dispatch(moveBack());
  }; */

  const currentRouteNode = routeNodes.routeNodes.findRoute(location.pathname);
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

{/* <form
        className="move-forward-form"
        onSubmit={handleClick3}
      >
        <p>SET_ROUTE</p>
        <input
          className="move-forward-input"
          type="text"
          name="moveForwardInput"
        />
        <button
          className="button"
          onClick={handleClick3}
          type="submit"
        >
          MOVE_FORWARD
        </button>
      </form>
      <div className="other-buttons">
        <button
          className="button"
          onClick={handleClick}
          type="button"
        >
          ADD
        </button>
        <button
          className="button"
          onClick={handleClick2}
          type="button"
        >
          REMOVE
        </button>
        <button
          className="button"
          onClick={handleClick4}
          type="button"
        >
          MOVE_BACK
        </button>
      </div> */}
