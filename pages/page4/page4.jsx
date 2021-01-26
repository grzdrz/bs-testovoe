import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  const routeNodes = useSelector((state) => state.routeNodes);
  const dispatch = useDispatch();
  /* debugger; */

  const handleClick = () => {
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
  };

  const listOfNodes = routeNodes.routeNodes.current.nodes.map((node) => `${node.route}__${node.title}`);

  return (
    <>
      <div className="list-of-nodes">{listOfNodes.toString()}</div>
      <form
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
      </div>
    </>
  );
};

export default Page4;
