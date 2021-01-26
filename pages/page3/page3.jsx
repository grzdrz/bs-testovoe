/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '../../shared/view/components/button/button.jsx';
import './page3.scss';

const Page3 = (props) => {
  const {
    text = 'portal_test',
  } = props;
  const history = useHistory();
  /* const location = useLocation(); */

  /* const handleHookTest1 = () => {
    history.push('/Path2');
  }; */

  const [isModalWindowHidden, setIsModalWindowHidden] = useState(false);
  const modalWindow = document.querySelector('.modal-window');
  const handleHookTest1 = () => {
    setIsModalWindowHidden(!isModalWindowHidden);
  };

  let dependency = 0;
  const generateValue = () => {
    dependency = Math.random().toFixed(1);
    const value = Math.random().toFixed(1);
    debugger;
    return value;
  };
  const someValue = useMemo(generateValue, [dependency]);

  return (
    <>
      <Button
        style={{ width: '100px', height: '50px', border: '1px solid red' }}
        text={someValue}
        onClick={generateValue}
      />
      {isModalWindowHidden
        ? (
          ReactDOM.createPortal(<div className="portal">PORTAL</div>, modalWindow)
        ) : null}
    </>
  );
};

export default Page3;
