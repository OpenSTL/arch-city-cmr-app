import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HeaderLink from './components/displays/headerLink'
import ScrollToTop from './components/logic/scrollToTop'

import Info from './pages/info';
import Questionnaire from './pages/questionnaire';
import Login from './pages/login';
import dashboard from './pages/dashboard';
import NoMatch from './pages/noMatch';
import NewUser from './pages/newUser';
import Prequestionnaire from './pages/prequestionnaire';

import { Button } from '@material-ui/core';

const homePath = '/';

// Add new page components here:
const routes = [
  {
    path: '/login',
    label: 'Login',
    component: Login
  },
  {
    path: '/application',
    label: 'Dashboard',
    component: dashboard
  },
  {
    path: '/',
    label: 'Info',
    component: Info
  },
  {
    path: '/questionnaire',
    label: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/newuser',
    label: 'New User',
    component: NewUser
  },
  {
    path: '/prequestionnaire',
    label: 'Prequestionnaire',
    component: Prequestionnaire
  }
]

const headerRoutes = [
  {
    path: '/application',
    label: 'Application',
    component: dashboard
  },
  {
    path: '/',
    label: 'Info',
    component: Info
  },
  {
    path: '/questionnaire',
    label: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/prequestionnaire',
    label: 'Prequestionnaire',
    component: Prequestionnaire
  }
]

export default function App() {

  return (
    <div className='app'>
      <Router>
        <div className='header'>
          <h1>Clear My Missouri Record</h1>
          <div align='center'>
            {headerRoutes.map((route) => (
              <HeaderLink 
                activeOnlyWhenExact={true}
                to={route.path}
                label={route.label}
              />
            ))}
          </div>
          <div align='right'>
            <Button variant='contained'
            href='/login'>
              Login/Signup
            </Button>
          </div>
        </div>
        <ScrollToTop />
        <Switch>
          {routes.map((route) => (
            <Route 
              exact path={route.path} 
              component={route.component} 
              key={route.path}
            />
          ))}
          <Redirect 
            exact from={homePath}
            to={routes[0].path} 
          />
          <Route component={NoMatch} />
        </Switch>
        <div className='footer'>
          <div className='footer-content'>footer placeholder</div>
        </div>
      </Router>
    </div>
  );
}
