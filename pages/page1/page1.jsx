import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseApplesCount, deleteApplesCount } from '../../redux/apples/actions.js';

import Button from '../../shared/view/components/button/button.jsx';

/* class TESTComponent1 extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>{props.text}</div>
    );
  }
}; */

const TESTComponent2 = () => {

};

const Page1 = (/* props */) => {
  /* const { } = props; */
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
      <Button onClick={handleIncreaseApplesCount} text={`increase_${apples.applesCount}`} />
      <Button onClick={handleDeleteApplesCount} text="delete" />
    </>
  );
};

export default Page1;
