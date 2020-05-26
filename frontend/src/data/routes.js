import Info from '../pages/info';
import Questionnaire from '../pages/questionnaire';
import Login from '../pages/login';
import dashboard from '../pages/dashboard';
import NewUser from '../pages/newUser';
import Prequestionnaire from '../pages/prequestionnaire';

export const routes = [
    {
      path: '/login',
      label: 'Login',
      component: Login
    },
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