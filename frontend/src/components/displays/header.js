import React, { useContext } from 'react';

import { AuthContext } from '../../data/authContext';
import {headerRoutes} from '../../data/routes'
import { fire } from '../../data/firebase';

import HeaderLink from './headerLink'

import { Button } from '@material-ui/core';




const Header = () => {
    const { currentUser } = useContext(AuthContext);

    const signout = () => {
        fire.auth().signOut();
    }

    return(
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

                <div className='loginbtn'>
                    {currentUser ? (<Button onClick={signout}>Sign Out</Button>) : (<Button href='/login'>Login</Button>)}
                    
                </div>
            </div>
            
        </div>
    );
}

export default  Header;