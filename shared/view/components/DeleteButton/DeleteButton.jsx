import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { removeNode } from '../../../../redux/RouteTree/actions';
import Button from '../Button/Button.jsx';
import './DeleteButton.scss';

const DeleteButton = (props) => {
  const { node } = props;
  const dispatch = useDispatch();

  const handleDeleteButton = useCallback(() => {
    dispatch(removeNode(node));
  }, [node]);

  return (
    <div className="delete-button">
      <Button text="удалить" type="button" onClick={handleDeleteButton} />
    </div>
  );
};

export default DeleteButton;
