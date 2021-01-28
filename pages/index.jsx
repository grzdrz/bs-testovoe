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
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import SetTransform from '../redux/SetTransform';
import Header from '../shared/view/components/Header/Header.jsx';
import RouteTreeNavigationPage from './RouteTreeNavigationPage/RouteTreeNavigationPage.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import rootReducer from '../redux/root-reducer';
import '../shared/styles/global.scss';
import './index.scss';

require.context('../shared/', true, /\.(ttf|eot|woff|woff2|svg|png|jpg|json)$/);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

const wrapper = document.querySelector('#wrapper');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route path="/main">
            <RouteTreeNavigationPage />
          </Route>
          <Route path="/">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  wrapper,
);
