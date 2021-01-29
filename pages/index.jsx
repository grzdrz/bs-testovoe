import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux/storeConfig';
import Header from '../shared/view/components/Header/Header.jsx';
import Footer from '../shared/view/components/Footer/Footer.jsx';
import RouteTreeNavigationPage from './RouteTreeNavigationPage/RouteTreeNavigationPage.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import '../shared/styles/global.scss';
import './index.scss';

require.context('../shared/', true, /\.(ttf|eot|woff|woff2|svg|png|jpg|json)$/);

const wrapper = document.querySelector('#wrapper');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/">
            <Header />
            <Switch>
              <Route path="/main">
                <RouteTreeNavigationPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/main" />
              </Route>
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  wrapper,
);
