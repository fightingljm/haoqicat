import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux'
import {userInfo} from '../action/actions.js'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state={
      username:'',
      password:''
    }
  }
  handleSubmit(){
    this.props.userInfo(this.state.username,this.state.password)
  }
  handleUsername(event,username){
    this.setState({username:username.trim()})
  }
  handlePassword(event,password){
    this.setState({password:password.trim()})
  }
  render(){
    // console.log(this.props.currentUser);
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
            <RaisedButton className='button' label="登 录" secondary={true} onTouchTap={this.handleSubmit.bind(this)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  currentUser:state.user
})
export default connect(mapStateToProps,{userInfo})(SignIn);
