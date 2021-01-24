import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseApplesCount, deleteApplesCount } from '../../redux/apples/actions.js';

import Button from '../../shared/view/components/button/button.jsx';

const Page1 = (props) => {
  const {
    path,
  } = props;
  const dispatch = useDispatch();
  const apples = useSelector((state) => state.apples);

  const handleIncreaseApplesCount = () => {
    dispatch(increaseApplesCount(2));
  };
  const handleDeleteApplesCount = () => {
    dispatch(deleteApplesCount());
  };

  return (
    <>
      <Button path={path} onClick={handleIncreaseApplesCount} text={`increase_${apples.applesCount}`} />
      <Button path={path} onClick={handleDeleteApplesCount} text="delete" />
    </>
  );
};

export default Page1;
