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

import Header from '../shared/view/components/Header/Header.jsx';
/* import Page2 from './page2/page2.jsx'; */
import RouteTreeNavigationPage from './RouteTreeNavigationPage/RouteTreeNavigationPage.jsx';
import rootReducer from '../redux/root-reducer';
import '../shared/styles/global.scss';
import './index.scss';

require.context('../shared/', true, /\.(ttf|eot|woff|woff2|svg|png|jpg|json)$/);

const store = createStore(rootReducer);

const wrapper = document.querySelector('#wrapper');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/main">
          <RouteTreeNavigationPage />
        </Route>
        <Route path="/">
          <Redirect to="/main" />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  wrapper,
);
