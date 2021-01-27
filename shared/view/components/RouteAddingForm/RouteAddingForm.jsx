import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { addNode } from '../../../../redux/RouteTree/actions';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './RouteAddingForm.scss';

const RouteAddingForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentNode = routeTree.find(location.pathname);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('route-title');
    const routeSegment = formData.get('route');
    dispatch(addNode({ currentNode, routeSegment, title }));
  }, [currentNode]);

  return (
    <form className="route-adding-form" onSubmit={handleSubmit}>
      <p className="route-adding-form__title">Добавление узлов</p>
      <div className="route-adding-form__route-input">
        <p className="route-adding-form__input-label">Route</p>
        <Input
          type="text"
          name="route-title"
          placeholder="route"
        />
      </div>
      <div className="route-adding-form__title-input">
        <p className="route-adding-form__input-label">Title</p>
        <Input
          type="text"
          name="route"
          placeholder="title"
        />
      </div>
      <div className="route-adding-form__submitter">
        <Button
          text="добавить роут"
          hasArrow
          type="submit"
        />
      </div>
    </form>
  );
};

export default RouteAddingForm;
