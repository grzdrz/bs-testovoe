import React from 'react';

import Button from '../../shared/view/components/button/button.jsx';

const Page2 = (props) => {
  const {
    path,
  } = props;

  return (
    <Button path={path} />
  );
};

export default Page2;
