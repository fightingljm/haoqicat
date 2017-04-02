import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {browserHistory} from 'react-router';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state={
      username:'',
      password:''
    }
  }
  handleSubmit(){
    let username = this.state.username;
    let password = this.state.password;
    axios.post('http://tiger.haoduoshipin.com/user/signup',{username,password})
      .then(res => {
        console.log(res)
        browserHistory.push('/signin');
      })
  }
  handleUsername(event,username){
    this.setState({username:username.trim()})
  }
  handlePassword(event,password){
    this.setState({password:password.trim()})
  }
  render(){
    return(
      <div className='signin-root'>
        <MuiThemeProvider>
          <div>
            <div>
              <label>用户名</label>
              <TextField
                hintText="Please input username"
                floatingLabelText="username"
                onChange={this.handleUsername.bind(this)}
              />
            </div>
            <div>
              <label>密&nbsp;&nbsp;&nbsp;码</label>
              <TextField
                hintText="Please input password"
                floatingLabelText="password"
                type="password"
                onChange={this.handlePassword.bind(this)}
              />
            </div>
            <RaisedButton className='button' label="注 册" secondary={true} onTouchTap={this.handleSubmit.bind(this)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default SignUp;
