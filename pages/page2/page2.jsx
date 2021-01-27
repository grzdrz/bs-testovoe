import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link, Route } from 'react-router-dom';

const Page2 = () => {
  const urlFunc = (location) => {
    console.log(location);
    return { ...location, pathname: location.pathname.includes('SubPath') ? location.pathname : `${location.pathname}/SubPath` };
  };

  return (
    <>
      <Link to={urlFunc} style={{ width: '100px', height: '50px', border: '1px solid red' }}>
        TEST_A
      </Link>
      <Route path="/Path2/SubPath">
        <NestingTest />
      </Route>
    </>
  );
};

const NestingTest = () => {
  let { path, url } = useRouteMatch();
  debugger;

  return (
    <div>ASDSGDF</div>
  );
};

export default Page2;
