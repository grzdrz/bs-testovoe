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
          exact
          path='/'
          render={() => {
            const text = 'Router1';
            return (<div>{text}</div>);
          }}
        /* component={<div>Route1</div>} */
        />
        <Route path='/Path2' component={<div>Route2</div>} />
      </Switch>
    </Router>
  </Provider>,
  targetElement,
);
