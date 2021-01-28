/* eslint-disable arrow-body-style */
import React from 'react';
import block from 'bem-cn';

import './ErrorPage.scss';

const b = block('error-page');

const ErrorPage = () => {
  return (
    <main className={b()}>
      <p className={b('title')}>Page not found</p>
      <img className={b('image')} src="../../shared/images/error.jpg" alt="oops, page not found" />
    </main>
  );
};

export default ErrorPage;
