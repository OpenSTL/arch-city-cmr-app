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
    },
    {
      path: "/application",
      label: "Application",
      component: dashboard
    }
  ]

  // {
  //   path: '/login',
  //   label: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/newuser',
  //   label: 'New User',
  //   component: NewUser
  // },

export const headerRoutes = [
  {
    path: '/',
    label: 'Info',
    component: Info
  }
  ]

  const PrivateRoute = ({ component: Dashboard, ...rest }) => {
    const {currentUser} = useContext(AuthContext);

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

  
