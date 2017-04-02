import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  handleSubmit(){

  }
  render(){
    return(
      <div className='signin-root'>
        <MuiThemeProvider>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>用户名</label>
              <TextField
                hintText="Please input username"
                floatingLabelText="username"
              />
            </div>
            <div>
              <label>密&nbsp;&nbsp;&nbsp;码</label>
              <TextField
                hintText="Please input password"
                floatingLabelText="password"
              />
            </div>
            <RaisedButton className='button' label="登 录" secondary={true} onTouchTap={this.handleSubmit.bind(this)}/>
          </form>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default SignIn;
