import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// import { AuthProvider } from './data/authContext';
import {routes} from './data/routes'

// Page components:
import Header from './components/displays/header'
import Footer from './components/displays/footer'
import NoMatch from './pages/noMatch';
import dashboard from './pages/dashboard';

import ScrollToTop from './components/logic/scrollToTop'

const homePath = '/';




export default function App() {

  return (
    <div className='app'>
      {/* <AuthProvider> */}
      <Router>
        <section>
        <Header/>
        </section>

        <ScrollToTop />

        <section>
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
        </section>
        <Footer/>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}
