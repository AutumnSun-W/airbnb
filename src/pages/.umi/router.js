import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/Footer',
    exact: true,
    component: require('../Footer/index.js').default,
  },
  {
    path: '/help/child',
    exact: true,
    component: require('../help/child.js').default,
  },
  {
    path: '/help/childs',
    exact: true,
    component: require('../help/childs.js').default,
  },
  {
    path: '/help',
    exact: true,
    component: require('../help/index.js').default,
  },
  {
    path: '/host/homes',
    exact: true,
    component: require('../host/homes.js').default,
  },
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
  },
  {
    path: '/kaizhanty',
    exact: true,
    component: require('../kaizhanty/index.js').default,
  },
  {
    path: '/login',
    exact: true,
    component: require('../login/index.js').default,
  },
  {
    path: '/Nav',
    exact: true,
    component: require('../Nav/index.js').default,
  },
  {
    path: '/register',
    exact: true,
    component: require('../register/index.js').default,
  },
  {
    path: '/Tab',
    exact: true,
    component: require('../Tab/index.js').default,
  },
  {
    path: '/Tab1',
    exact: true,
    component: require('../Tab1/index.js').default,
  },
  {
    path: '/d',
    exact: false,
    component: require('../d/_layout.js').default,
    routes: [
      {
        path: '/d/financials',
        exact: true,
        component: require('../d/financials.js').default,
      },
      {
        path: '/d/safety',
        exact: true,
        component: require('../d/safety.js').default,
      },
      {
        path: '/d/setup',
        exact: true,
        component: require('../d/setup.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/MAIBENBEN/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/MAIBENBEN/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
