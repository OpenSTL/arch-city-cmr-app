import React, {useCallback, useContext, useState} from 'react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import { withRouter, Redirect } from 'react-router-dom';
import { fire } from '../data/firebase'
import {AuthContext} from '../data/authContext'

const NewUser = ({ history }) => {
  const [state, setState] = useState({
    email: '',
    password: '' 
  })

  const handleChange = e => {
    const {id , value} = e.target
    setState( (prev) => ({
      ...prev,  
      [id] : value
    }))
  }

  const handleCreateUser = useCallback(
    async event => {
      event.preventDefault();
      try {
        console.log(state)
        await fire
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        history.push("/application");
      } catch (error) {
        alert(error.message);
      }
    },
    [history, state]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

	return (
    <Paper className='new-user'
      elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <TextField className='login-box'
            id='email'
            placeholder='Email'
            variant='outlined'
            fullWidth={true}
            type='email'
            onChange={handleChange}>
              placeholder
          </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField className='login-box'
              id='password'
              placeholder='Password'
              variant='outlined'
              fullWidth={true}
              onChange={handleChange}>
                placeholder
            </TextField>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button fullWidth={true}
              variant="contained"
              color="primary"
              onClick={handleCreateUser}
              >
              Create User
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={12}>
            <Button variant='text'
              fullWidth={true}
              onClick={() => history.push('/login')}>
              Sign in instead
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
};

export default withRouter(NewUser);