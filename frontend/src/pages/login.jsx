import React, {Component} from 'react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { fire } from '../data/firebase'



class Login extends Component{
  state = {
    email: '',
    password: '',
    errorMessageLogin: '',
    errorMessageSignup: ''
  }


  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u) => {
      console.log(u.user.uid)
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({errorMessageLogin: errorMessage})
        console.log(errorCode + ': ' + errorMessage)
        // ...
      });
      
    };

    handleChange = e => {
      this.setState({[e.target.id]: e.target.value})
    }

  redirect(path){
    this.props.history.push(path)
  }

  render(){
    return (
      <Paper elevation={3}
      className='login-window'>  
    
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField className='login-box'
                id='email'
                placeholder='Email'
                variant='outlined'
                fullWidth='true'
                type='email'
                onChange={this.handleChange}>
                  placeholder
              </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField className='login-box'
                  id='password'
                  placeholder='Password'
                  variant='outlined'
                  fullWidth='true'
                  onChange={this.handleChange}>
                    placeholder
                </TextField>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Button fullWidth='true'
                  variant="contained"
                  color="primary"
                  onClick={this.login}
                  >
                  Login
                </Button>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={6}>
                <Button variant='text'
                  fullWidth='true'
                  onClick={() => this.redirect('/newuser')}>
                  Create Account
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='text'
                  fullWidth='true'
                  disabled="true">
                  Forgot Password?
                </Button>
              </Grid>
            </Grid>
      </Paper>
    );
  }
};

export default withRouter(Login);