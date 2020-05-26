import React, {useCallback, useContext, useState} from 'react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import { withRouter, Redirect } from 'react-router-dom';
import { fire } from '../data/firebase'
import {AuthContext} from '../data/authContext'

const Login = ({ history }) => {
  const [state, updateState] = useState({
    email: '',
    password: '' 
  })

  const handleChange = e => {
    const {name , value} = e.target
    updateState( prevState => ({
        ...prevState,
        [name] : value
    }))
  }
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(state.email, state.password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Paper elevation={3}
    className='login-window'>  
  
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField className='login-box'
              id='email'
              placeholder='Email'
              variant='outlined'
              fullWidth={true}
              type='email'
              onChange={handleChange}
              >
                placeholder
            </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField className='login-box'
                id='password'
                placeholder='Password'
                variant='outlined'
                fullWidth={true}
                onChange={handleChange}
                >
                  placeholder
              </TextField>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Button fullWidth={true}
                variant="contained"
                color="primary"
                onClick={handleLogin}
                >
                Login
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
              <Button variant='text'
                fullWidth={true}
                onClick={() => { return(<Redirect to="/newuser" />)}}>
                Create Account
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='text'
                fullWidth={true}
                disabled={true}>
                Forgot Password?
              </Button>
            </Grid>
          </Grid>
    </Paper>
  );
};


export default withRouter(Login);