import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HeaderLink from './components/displays/headerLink'
import ScrollToTop from './components/logic/scrollToTop'


import NoMatch from './pages/noMatch';
import {routes, headerRoutes} from './data/routes'

import { Button } from '@material-ui/core';
import { AuthProvider } from './data/authContext';

const homePath = '/';

// Add new page components here:


export default function App() {

  return (
    <div className='app'>
      <AuthProvider>
      <Router>
        <div className='header'>
          <h1><a href='/'>Arch City Expungement Clinic</a></h1>
          <div align='center'>
            {headerRoutes.map((route) => (
              <HeaderLink 
                activeOnlyWhenExact={true}
                to={route.path}
                label={route.label}
              />
            ))}
          </div>
          <div className='loginbtn'>
            <Button
            href='/login'>
              Login
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
      </AuthProvider>
    </div>
  );
}
