import React from 'react';
import Home from './components/screens/Home';
import About from './components/screens/About';

// @todo: lazyロードだとエラーになる
// const Home = React.lazy(() => import('./components/screens/Home'));
// const About = React.lazy(() => import('./components/screens/About'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/about', exact: true, name: 'About', component: About },
];

export default routes;
