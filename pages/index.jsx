import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* Redirect, */
} from 'react-router-dom';

import Page1 from './page1/page1.jsx';
import Page2 from './page2/page2.jsx';
import Page3 from './page3/page3.jsx';
import Page4 from './page4/page4.jsx';
import rootReducer from '../redux/root-reducer';
import '../shared/styles/global.scss';
import './index.scss';

require.context('../shared/', true, /\.(ttf|eot|woff|woff2|svg|png|jpg|json)$/);

const store = createStore(rootReducer);

const targetElement = document.querySelector('#app');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/'>
        <Page4 />
      </Route>
    </Router>
  </Provider>,
  targetElement,
);


{/* <Route
        path='/'
        render={() => {
          const text = 'Route_1';
          return (
            <>
              <div>{text}</div>
              <Page1 />
            </>
          );
        }}
      />
      <Route
        path='/Path2'
        render={() => {
          const text = 'Route_2';
          return (
            <>
              <div>{text}</div>
              <Page2 />
            </>
          );
        }}
      />
      <Route path='/Path3'>
        <>
          <div>Route_3</div>
          <Page3 />
        </>
      </Route> */}