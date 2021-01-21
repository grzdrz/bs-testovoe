import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Page1 from './page1/index.jsx';
import Page2 from './page2/index.jsx';
import { reduceTemp } from '../redux/temp-reducer';
import '../shared/styles/global.scss';

require.context('../shared/', true, /\.(ttf|eot|woff|woff2|svg|png|jpg|json)$/);

const store = createStore(reduceTemp);
store.dispatch({
  type: 'default',
});

const targetElement = document.querySelector('#app');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          path='/Path1'
          render={() => {
            const text = 'Route_1';
            return (
              <>
                <div>{text}</div>
                <Page1 path="/" />
              </>
            );
          }}
        />
        <Route
          exact
          path='/'
          render={() => {
            const text = 'Route_0';
            return (
              <>
                <div>{text}</div>
                <Page2 path="/Path1" />
              </>
            );
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  targetElement,
);
