import React, { useContext } from 'react';

// import { AuthContext } from '../../data/authContext';
import {headerRoutes} from '../../data/routes'
import { fire } from '../../data/firebase';

import HeaderLink from './headerLink'


import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/logo.png'


const useStyles = makeStyles({
    root: {
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const Header = () => {
    // const { currentUser } = useContext(AuthContext);

    // const signout = () => {
    //     fire.auth().signOut();
    //     headerRoutes.splice(-1,1)
    // }

    // if(!!currentUser){
    //     headerRoutes.push({
    //         path: '/application',
    //         label: 'Application',
    //         component: dashboard
    //       })
    // }
    const classes = useStyles()
    return(
        <div className='header'>
            <div className="logo-container">
                <a href='/'><img src={logo} alt='Expungement' height="100" width="400px"></img></a>
            </div>
            <div className="nav-container">
                <div align='center'>
                    {headerRoutes.map((route) => (
                        <HeaderLink 
                        activeOnlyWhenExact={true}
                        to={route.path}
                        label={route.label}
                        />
                    ))}

                    {/* <div className='loginbtn'>
                        {currentUser ? (<Button onClick={signout} className={classes.root}>Sign Out</Button>) : (<Button href='/login' className={classes.root}>Login</Button>)}
                        
                    </div> */}
                </div>
            </div>
            
        </div>
    );
}

export default  Header;