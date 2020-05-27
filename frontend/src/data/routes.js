import React, {useContext} from 'react';
import { Route, Redirect } from "react-router-dom";

import Info from '../pages/info';
import Questionnaire from '../pages/questionnaire';
import Login from '../pages/login';
import dashboard from '../pages/dashboard';
import NewUser from '../pages/newUser';
import Prequestionnaire from '../pages/prequestionnaire';

import {AuthContext} from './authContext'


export const routes = [
    {
      path: '/login',
      label: 'Login',
      component: Login
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

export const headerRoutes = [
  {
    path: '/',
    label: 'Info',
    component: Info
  }
  ]

  export const PrivateRoute = ({ component: Dashboard, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    if (!!currentUser) {
      headerRoutes.push({
        path: '/application',
        label: 'Application',
        component: dashboard
      })
      console.log('done')
    }

    return (
      <Route
        {...rest}
        render={routeProps =>
          !!currentUser ? (
            <Dashboard {...routeProps} />
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    );
  };

  