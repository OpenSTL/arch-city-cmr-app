import React, {Component} from 'react';
import { TextField, Grid, Button, Paper} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { fire } from '../data/firebase'

class NewUser extends Component{
  state = {
    email: '',
    password: '',
    errorMessageLogin: '',
    errorMessageSignup: ''
  }


  signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((u) => {
      // db.collection(u.user.uid).doc('1')
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({errorMessageSignup: errorMessage})
        console.log(errorCode + ': ' + errorMessage)
       
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
    <Paper className='new-user'
      elevation={3}>
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
              onClick={this.signup}
              >
              Create User
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={12}>
            <Button variant='text'
              fullWidth='true'
              onClick={() => this.redirect('/login')}>
              Sign in instead
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  };
};

export default withRouter(NewUser);