import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import block from 'bem-cn';

import { addNode } from '../../../../redux/RouteTree/actions';
import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './RouteAddingForm.scss';

const b = block('route-adding-form');

const RouteAddingForm = () => {
  const dispatch = useDispatch();
  const { currentNode } = useCurrentNode();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('route-title');
    const routeSegment = formData.get('route');
    dispatch(addNode({ currentNode, routeSegment, title }));
  }, [currentNode]);

  return (
    <form className={b()} onSubmit={handleSubmit}>
      <p className={b('title')}>Добавление узлов</p>
      <div className={b('route-input')}>
        <p className={b('input-label')}>Route</p>
        <Input
          type="text"
          name="route"
          placeholder="route"
          required
        />
      </div>
      <div className={b('title-input')}>
        <p className={b('input-label')}>Title</p>
        <Input
          type="text"
          name="route-title"
          placeholder="title"
          required
        />
      </div>
      <div className={b('submitter')}>
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
