import React from 'react';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';

// @todo: lazyロードだとエラーになる
// const Home = React.lazy(() => import('./components/screens/Home'));
// const About = React.lazy(() => import('./components/screens/About'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/signup', exact: true, name: 'SignUp', component: SignUp },
  { path: '/about', exact: true, name: 'About', component: About },
];

export default routes;
