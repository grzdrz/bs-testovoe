/* eslint-disable arrow-body-style */
import React from 'react';
import block from 'bem-cn';

import './ErrorPage.scss';

const b = block('error-page');

const ErrorPage = () => {
  return (
    <main className={b()}>
      Page not found
    </main>
  );
};

export default ErrorPage;
